const express = require('express');
const Artist = require('../models/Artist');
const router = express.Router();
const multer = require('multer');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');


//Single image upload

const AadharcardPath = "";
const PancardPath = "";

multer.diskStorage({
	destination: (req, file, cb) => {       
		if (file.fieldname === "Aadharcard") { 
			cb(null, "./Images/Aadharpic");
		}
    if (file.fieldname === "Pancard") {
			cb(null, "./Images/Pancardpic");
		} 
	},
	filename: async (req, file, cb) => {
    const token = req.cookies.jwt;
		const verifyUser = jwt.verify(token, process.env.SERECTKEY_LOGIN);
		console.log(verifyUser);
    const data = await user.find({ _id: verifyUser._id });

    if (file.fieldname === "Aadharcard") { // if uploading resume
      AadharcardPath = data[0]["NUMBER"] + "Adharcard" + path.extname(file.originalname);
			cb(null, AadharcardPath);
		} 
    if (file.fieldname === "Pancard") {
      PancardPath = data[0]["NUMBER"] + "Pancard" + path.extname(file.originalname);
      cb(null, PancardPath );
		} 
    const update = await user.update({ _id: verifyUser._id }, { $set: { Text_AdharPhoto: AadharcardPath ,Text_PancardPhoto : PancardPath } });
	} 
});


const upload = multer({
  storage: storageEngine,
});

const JWT_SECRET = 'JaiShreeKrishna';

// Route 1 : Registration for Artist using : POST "/api/Artist_registration/Artist_registration"

router.post('/Varification_request',imageUpload.fields([{
	name: 'AadharCard', maxCount: 1
}, {
	name: 'PanCard', maxCount: 1
}]), async (req, res) => {
  try {
    const token = req.cookies.jwt;
		const verifyUser = jwt.verify(token, JWT_SECRET);
		console.log(verifyUser);
    // If there are errors , return bad request and the errors
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const Username = req.body.Username;
    const Mobile_No = req.body.Mobile_No;
    const Email = req.body.Email;
    const newDate = new Date(req.body.Date);
    const textDate = newDate.toString();
    const Gender = req.body.Gender;
    const Experience = req.body.Experience;
    const AddressBirth = req.body.AddressBirth;
    const AddressLive = req.body.AddressLive;
    const Country = req.body.Country;
    const State = req.body.State;
    const Zipcode = req.body.Zipcode;
    const BirthZipcode = req.body.BirthZipcode;
    const AadharNumber = req.body.AadharNumber;
    const PanNumber = req.body.PanNumber;
    const Location = req.body.Location;
    const Password = req.body.Password;
    const Type = 1;

    
    const salt = await bcrypt.genSalt(saltRounds);
    const finalPassword = await bcrypt.hash(Password, salt);
    
    let Artist_Details = await Artist.create({
      Username: Username,
      Mobile_No: Mobile_No,
      Email: Email,
      Date: textDate,
      Gender: Gender,
      Experience: Experience,
      AddressBirth:AddressBirth,
      AddressLive:AddressLive,
      Country:Country,
      State:State,
      Zipcode:Zipcode,
      BirthZipcode:BirthZipcode,
      AadharNumber:AadharNumber,
      PanNumber: PanNumber,   
      Location: Location,
      Password: finalPassword,
      Photo_text: Path,
      AccountType:Type,
    })
    success = true;
    res.json({ success, Artist_Details });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;