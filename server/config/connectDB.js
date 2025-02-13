const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Kết nối thành công");
        });
        connection.on('error',(err)=>{
            console.log("Kết nối thất bại: "+ err);
        });
    }catch (error){
        console.log("Kết nối lỗi ", error);
    }
}
module.exports = connectDB;