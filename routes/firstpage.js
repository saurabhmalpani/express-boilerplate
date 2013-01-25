/*
 * GET home page.
 */
var firstpageControl = require('../controllers/firstpage');

exports.get = function(req, res){
   firstpageControl.get(req,res);
};

exports.post = function(req, res){
   firstpageControl.post(req,res);
};
