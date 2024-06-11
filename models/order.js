const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    consumer_id: {
        type: Number,
        unique: true
    },
    order_id:{
         type:Number,
         unique:true
    },
    orderPrice:{
        type:Number,

    },

    orderDate: {
        type: Date,
        default:Date.now(),
    },

    active: {
        type: Boolean,
        default: 1
    },
    cr_by: {
        type: Number,
        default: 1
    },
    cr_date: {
        type: Date,
        default: Date.now(),
    }
  
 

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
