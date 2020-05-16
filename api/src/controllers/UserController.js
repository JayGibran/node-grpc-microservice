const HidraService = require('../service/hidra');
const { promisify } = require('util');

class UserController {
  async store(req, res){
    const {username, email, password} = req.body;
    const response = await new Promise((resolve, reject) => {
      console.log(HidraService);
      HidraService.registerUser({ user: { email, username, password}}, (err, response) => {
         if(err){
           reject(err);
         }else{
           resolve(response);
         } 
       });
   })
   return res.json(response);
  }

  async show(req, res){
    const { id } = req.params
    const response = await new Promise((resolve, reject) => {
      HidraService.getUserById({id}, (err, response) => {
         if(err){
           reject(err);
         }else{
           resolve(response);
         } 
       });
   })
   return res.json(response);
  }
}

module.exports =  new UserController();