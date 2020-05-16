const HidraService = require('../service/hidra');

module.exports = async (req, res, next) => {
  try {
    const response = await new Promise((resolve, reject) => {
      HidraService.authenticate({token: req.headers.authorization}, (err, response) => {
        if(err || response.error){
          reject(err || response.error);
        }else{
          
          resolve(response);
        }
      });
    });
    if(response.error){
      throw new Error(response.error);
    }
    req.userId = response.user.id;
    next();
  }catch(err) {
    return res.status(401).send(err);
  }
}