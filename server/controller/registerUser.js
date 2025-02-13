const UserModel = require("../model/UserModel");
const bcryptjs = require('bcryptjs');

async function registerUser(request, response){
    try{
        const {name, email, password, profile_pic} = request.body;
        
        const checkEmail = await UserModel.findOne({email});
        if(checkEmail){
            return response.status(400).json({
                message: "Email đã tồn tại",
                error: true
            });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashpassword = await bcryptjs.hash(password, salt);

        const payload = {
            name,
            email,
            profile_pic,
            password: hashpassword
        }
        // add db
        const user = new UserModel(payload);
        const usersave = await user.save();
        return response.status(201).json({
            message: "Đăng ký người dùng thành công",
            data: usersave,
            success: true
        });

    }catch(err){
        return response.status(500).json({
            message: err.message || err,
            error : true
        })
    }
}

module.exports = registerUser;