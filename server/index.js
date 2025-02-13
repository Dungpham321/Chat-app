const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const app = express();

app.use(cors({
    origin: process.env.FRONT_END_URL,
    credentials: true
}));

const PORT = process.env.PORT || 9090;
app.get('/',(request,response)=>{
 response.json({
    message: "Server đang chạy tại:" + PORT
 });
});

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server đang chạy tại:"+ PORT);
    });
});
