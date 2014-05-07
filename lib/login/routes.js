/**
 * Created by JaneCockblocker on 25/04/14.
 */
var crypto = require("crypto");

//route hanlder for login request
var login = function (req, res){
  //console.log(req)
  res.send(req.body.username);
}

//route handler for signup request
var signup = function (req, res){

}

//route handler for logout request
var logout = function (req,res){

}
//route handler for password reset
var resetpassword = function(){

}
exports.login = login;
exports.signup = signup;
exports.logout = logout;
exports.resetpassword = resetpassword