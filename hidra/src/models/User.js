const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new  mongoose.Schema({
  email: String,
  username: String,
  password: String 
});

UserSchema.pre('save', async function hashPassword(next){
  if(! this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash){
    return bcrypt.compare(hash, this.password);
  }
}

UserSchema.statics =  {
  generateToken({id}) {
    return jwt.sign({id}, 'a958ffcf61401e058144747483799652', {
      expiresIn: '7d',
    })
  }
}

module.exports=mongoose.model('User', UserSchema);