const express = require('express');
const connectDB = require('./config/db');

 const app = express();
 const fileUpload=require('express-fileupload')
 app.use(fileUpload());
// connect db
connectDB();
//init middelware
app.use(express.json({extended: false}));



const PORT =  process.env.PORT || 5000;

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
