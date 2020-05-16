const Purchase = require('./models/Purchase');

module.exports = {
  async getPurchaseById(call, callback) {
    const { id } = call.request;
    console.log(id)
    const purchase = await Purchase.findById(id);
    console.log("purchase"+  purchase);
    if(!purchase){
      return callback(null, {error: 'Purchase not found'});
    }
    
    return callback(null, {purchase});
  },
  
  async purchase(call, callback) {
    const { title, value, userId } = call.request.purchase;
    
    const purchase = await Purchase.create({ title, value, userId });
    
    return callback(null, {purchase});
  },
  
  async listPurchases(call, callback)  {
    const { userId } = call.request

    const purchases = await Purchase.find({userId});
    
    return callback(null, {purchases});
  },
}