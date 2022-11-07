const connectToMongo = require("./db");
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');


connectToMongo();
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json());   
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/User',require('./routes/Login'));
app.use('/api/Artist_registration',require('./routes/Artist_registration'));
app.use('/api/Vendor_registration',require('./routes/Vendor_registration'));

app.listen(port, () => {
  console.log(`The server is running on ${port}`)
})



//dncs
// const express = require('express');
// const app = express();
// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//     apiKey: 'YOUR_API_KEY',
//     apiSecret: 'YOUR_API_SECRET_KEY',
// });


// app.get('/', (req, res) => {
//     // Initialize with sender and reciever
//     // mobile number with text message
//     const from = 'sender_name';
//     const to = '743374230';
//     const text = 'Greetings from Geeksforgeeks';

//     nexmo.message.sendSms(from, to, text,
//         function (error, result) {

//             // If some error occured
//             if (error) {
//                 console.log("ERROR", error)
//             }

//             // If message is sent successfully
//             else {
//                 console.log("RESULT", result)
//             }
//         });
//     res.send("GeeksforGeeks");
// })

// app.listen(4000, () => {
//     console.log("server is running on port 4000");
// })