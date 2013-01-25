// currently this is built inside this file
// later we will store this in a database

var names = {};
// An empty JSON object to start with

exports.exists = function(username) {
   console.log(names)
   return (names[username] != undefined)
} 

exports.add = function(username) {
   names[username] = username
   console.log(names)
}

//Temporary but pretty nifty use of JSON :-)
