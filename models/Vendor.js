const mongoose = require('mongoose');
const { Schema } = mongoose;

const VendorSchema = new Schema({
  Username : {
    type : String,
    default: null
  },
  Mobile_No : {
    type : Number,
    default: null
  },
  Email : {
    type : String,
    default: null
  },
  Date : {
    type : Date,
    default: null
  },
  Gender:{
    type : String,
    default: null
  },
  Experience:{
    type : Number,
    default: null
  },
  AddressBirth:{
    type : String,
    default: null
  },
  AddressLive:{
    type : String,
    default: null
  },
  Country:{
    type : String,
    default: null
  },
  State:{
    type : String,
    default: null
  },
  Zipcode:{
    type : Number,
    default: null
  },
  BirthZipcode:{
    type : Number,
    default: null
  },
  AadharNumber:{
    type : Number,
    default: null
  },
  PanNumber:{
    type : String,
    default: null
  },
  Location:{
    type : String,
    default: null
  },
  Password:{
    type : String,
    default: null
  },
  Photo_text:{
    type : String,
    default: null
  },
  AccountType:{
    type : Number,
    default: null
  }
});

module.exports = mongoose.model('Vendor',VendorSchema);
