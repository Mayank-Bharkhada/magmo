const express = require('express');
const Artist = require('../models/Artist');
const router = express.Router();
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Single image upload

let Path = "";

const storageEngine = multer.diskStorage({
  destination: "./Images/Profilepic",
  filename: async (req, file, cb) => {
    const TODAY_DATE = new Date();
			const DAY = TODAY_DATE.getDate();
			const MONTH = TODAY_DATE.getMonth() + 1;
			const YEAR = TODAY_DATE.getFullYear();
			const Minutes = TODAY_DATE.getMinutes();
      const Sec = TODAY_DATE.getSeconds();
    Path =  `${DAY}${MONTH}${YEAR}${Minutes}${Sec}${file.originalname}`;
    cb(null, Path);
  },
});

const upload = multer({
  storage: storageEngine,
});



// Route 1 : Registration for Artist using : POST "/api/Artist_registration/Artist_registration"

router.post('/Artist_registration',upload.single('photo'), async (req, res) => {

  try {
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