const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
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
  },
  Verification_request:{
    type : Number,
    default: 0
  },
  Account_Varified:{
    type : Number,
    default: 0
  },
  Bank_information:[{
    Name:{
      type : String,
      default: null
    },
    Account_number:{
      type : Number,
      default: null
    },
    Bank_Name:{
      type : String,
      default: null
    },
    IFSC_Code:{
      type : String,
      default: null
    },
    Branch_Name:{
      type : String,
      default: null
    },
  }],
  Text_AdharPhoto:{
    type : String,
    default: null
  },
  Text_PancardPhoto:{
    type : String,
    default: null
  }
});

module.exports = mongoose.model('Artist',ArtistSchema);
