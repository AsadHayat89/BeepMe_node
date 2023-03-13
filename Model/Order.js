const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = Schema({
    userMail: String,
    receiverMail: String,
    offerAmount: Number,
    days: String,
    stat:String,
    price:String,
    date: { 
         type: Date,
         default: Date.now ,
         get: (val) => val.toISOString().slice(0, 10), // extract the date portion
         set: (val) => new Date(val) }
  });
  
  // Create the order model
  const Order = mongoose.model('Order', orderSchema);
  module.exports=Order;