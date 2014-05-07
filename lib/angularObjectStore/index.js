/*
* Author:       Larry Eliemenye
* Description:  Provides read/write access to IndexedDB. Stringifies Objects to LocalStorage as fallback
*               For IndexedDB, storenames are ngStore1,ngStore2, ngStore3 or you can pass a storename yourself
*
* */

(function(window, angular, undefined){

  var objStore = angular.module('ngObjectStore',['ng']);
  objStore.factory('$objectStore',['$rootScope',function($rootScope){
    var store = {};
    var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB,
        localStorage = window.localStorage;

    //run checks to use appropriate store
    if(!(window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB)){
      if(!localStorage) throw "This browser does not IndexedDB or LocalStorage"
    }
    else store = indexedDB || localStorage;

    //
    var getObject = function(){

    }

    var setObject = function(){

    }

    var getStoreName = function(){

    }
    return{
      getObject:getObject,
      setObject:setObject,
      storeInstance:store,
      storeName:getStoreName
    }
  }])

})(window,window.angular)
