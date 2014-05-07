/*
* Author:       Larry Eliemenye
* Description:  Provides read/write access to IndexedDB. Stringifies Objects to LocalStorage as fallback
*               For IndexedDB, storenames are ngStore1,ngStore2, ngStore3 or you can pass a storename yourself
*
* TODO: MarkerArray single - A utility Array i call marker array that marks a particular index of the array to be used later. this can be useful when there is a need to monitor one item in a list of items. this is synonimouse to a GUI radio button in which one item can be markerd or checked in a list of items. This is implemeted by MarkerArray.markSingle(index)
* TODO: MarkerArray multi - Another addition to marker.mark which mark multiple indices on an array. The markable indices must be a subet of the larger array. This is implemeted by MarkerArray.markMulti([array])
* */

(function(window, angular, undefined){

  angular.module('ngObjectStore',['ng']).
    factory('$objectStore',['$rootScope',function($rootScope){

        var store = {};
        var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB,
            localStorage = window.localStorage;

        var request,database;
        var versions              = [1,2,3,4,5];
        var currentVersion        = 5;
        var transaction;
        var OS_READWRITE          =  "readwrite";
        var OS_READONLY           =  "readonly";

        //run checks to use appropriate store
        if(!(window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB)){
          if(!localStorage) throw "This browser does not IndexedDB or LocalStorage"
        }
        else store = indexedDB || localStorage;

        function initIDB(){
          if(store === indexedDB){
            request = indexedDB.open('ngStore',currentVersion);
            request.onerror = onOpenRequestError;
            request.onsuccess = onOpenRequestSuccess;
            request.onupgradeneeded = onUpgradeNeeded
          }else if(store === localStorage){
            console.log("store is localStorage");
          }else throw "This browser does not IndexedDB or LocalStorage";
        }

        var onOpenRequestError = function(event){
          console.log("Error Opening database: "+event.target.error.message);
          console.log()
        }
        var onOpenRequestSuccess = function(event){
          console.log("db open success")
          database = event.target.result;

        };

        var onUpgradeNeeded = function(event){
          //create object store
          console.log("upgradeneeded")
          database = event.target.result;
          event.target.transaction.onerror = onVersionChangeTransactionError

          if (database.objectStoreNames.contains("ngStore")){
            database.deleteObjectStore("ngStore");
          }

          store = database.createObjectStore("ngStore",{keyPath:"timestamp"});
          console.log(store);
        }

        var onSetVersionRequestSuccess = function(event){
          throw "something bad happened while trying to set DB version"+ event.target.errorCode;
        }

        var onVersionChangeTransactionError = function(event){
          console.log("Error during version change transaction");
        }

        var onObjectStoreSuccess = function(event){
          console.log("Object added successfully");
          console.log(event)
        }

        var onObjectStoreError = function(event){
          throw event.target.error.message;
        }
        var IDBObject = {
          init:initIDB(),
          getObject:function(){

          },
          setObject:function(object_name,object_to_store){
            transaction = database.transaction([object_name],OS_READWRITE);
            store = transaction.objectStore(object_name);
            request = store.add(object_to_store,1);
            request.onsuccess = onObjectStoreSuccess
            request.onerror = onObjectStoreError ;
          },
          storeInstance:store,
          dbInstance:database,
          storeName:function(){

          }
        };

        var lsObject = {
          getObject:function(){

          },
          setObject:function(){

          }
        }
        return store === indexedDB ? IDBObject : lsObject;
  }])

})(window,window.angular)