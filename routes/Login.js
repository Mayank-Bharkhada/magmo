const express = require('express');
const Artist = require('../models/Artist');
const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'JaiShreeKrishna';
// Route  : Login for user using : POST "/api/User/Login"



router.post('/Login', async (req, res) => {

  try {

    let success = false;
    // if there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const Email = req.body.Email;
    const Password = req.body.Password;

    console.log(Email);
    console.log(Password);

    let user = await Vendor.findOne({ Email });
    if (!user) {
      user = await Artist.findOne({ Email });
    }
    if (!user) {
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(Password, user.Password);
    if (!passwordCompare) {
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authToken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

module.exports = router;