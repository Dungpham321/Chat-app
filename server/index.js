const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const app = express();
const router = require('./routes/index');
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: process.env.FRONT_END_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 9090;
app.get('/',(request,response)=>{
 response.json({
    message: "Server đang chạy tại:" + PORT
 });
});

//api router
app.use('/api',router);

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server đang chạy tại:"+ PORT);
    });
});
