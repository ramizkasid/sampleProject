var express = require('express');
var router = express.Router();
var cardModel = require('../models/userDetails.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname + '/index.html'));
});
router.post('/cardetails', function(req, res, next) {
  var condition = req.body.card_number&&req.body.card_number!==undefined
					&&req.body.pin&&req.body.pin!==undefined
          if(condition){
            cardModel.findOne({'card_number':req.body.card_number}, function(err, card){
              if(err){
                res.json({'code':401,'message':'Failure'});
              }
              else{
                if (card&&card!==null&&card!==undefined){
                  res.json({'code':200,'message':'Success','data':data});
                }
                else{
                  res.json({'code':401,'message':'Failure! Invalid email or password.'});
                }
              }
            })
          }
          else{
            res.json({'code':401,'message':'Please enter valid card number and pin'});
          }

});
// exports.login = function(req, res, next){
// 	var condition = req.body.email&&req.body.email!==undefined
// 					&&req.body.password&&req.body.password!==undefined
// 	if(condition){
// 		var db = new userModel();
// 		cardModel.findOne({'card_number':req.body.card_number},function(err, card){
// 		if(err){
// 			res.json({'code':401,'message':'Failure'});
// 		} else{
// 			if (card&&card!==null&&card!==undefined&&db.validPassword(req.body.password,user.password)) {
// 				var token = jwt.sign({'user': {'_id':user._id}}, resources.privateKey, { expiresIn: 60*60*24 });
// 				userModel.findOneAndUpdate({"_id":user._id},{'login_token':token, 'is_online':1}, function(err, user){
// 					if(err){
// 						res.json({'code':401,'message':'Fail to get User Id : '+err});
// 					} else{
// 						if(user&&user!==null&&user!==undefined){
// 							res.json({'code':200,'message':'Success','token':token});
// 						} else{
// 							res.json({'code':401,'message':'Failure! Invalid email or password.'});
// 						}
// 					}
// 				});
// 			} else {
// 				res.json({'code':401,'message':'Failure'});
// 			}
// 		}
// 	})
// 	} else {
// 		res.json({'code':401,'message':'Invalid!'});
// 	}
// };

module.exports = router;
