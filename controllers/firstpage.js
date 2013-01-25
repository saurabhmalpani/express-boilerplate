
/*
 * GET home page.
 */

var users = require('../models/user')

exports.get = function(req, res){
   res.render('firstpage', { title: 'Express' });
};


/*
 * Currently this function is synchronous, need
 * to make it asynchronous when we hook into the 
 * database
 */
exports.post = function(req, res){
   var username = req.body.username
   var existing = users.exists(username)
   if(req.body.olduser==undefined){
      console.log('New User: ' + username)
      if(existing) {
        res.send('User already exists')
      } else {
        users.add(username)
        res.send('Welcome ' + username)
      }
   } else {
      console.log('Old User: ' + username)
      if(existing) {
        res.send('Welcome back ' + username)
      } else {
        res.send('Who art thou ' + username)
      }
   } 
};
