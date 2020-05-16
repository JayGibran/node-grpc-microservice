const NixService = require('../service/nix');
const { promisify } = require('util');
class PurchaseController {
  async store(req, res){
    const {title, value} = req.body;
    console.log(req.userId);
    const response = await new Promise((resolve, reject) => {
      NixService.purchase({ purchase: {title, value, userId: req.userId}}, (err, response) => {
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
    try{
      const response = await new Promise((resolve, reject) => {
        NixService.getPurchaseById({id}, (err, response) => {
          if(err || response.error){
            reject(err || response.error);
          }else{
            resolve(response);
          } 
        });
      })
      if(response.error){
        throw new Error(response.error);
      }
      return res.json(response);
    }catch(error){
      return res.status(400).json({error: error});
    }
  }

  async index(req,res){
    const response = await new Promise((resolve, reject) => {
      NixService.listPurchases({userId: req.userId}, (err, response) => {
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

module.exports = new PurchaseController(); 