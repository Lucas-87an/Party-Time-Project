const router = require("express").Router();
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/AUTH.js");
const bcrypt = require("bcrypt")


// Current User information
router.get("/", auth,async(req,res)=>{
    const profile = await UserModel.findById(req.user._id);
    res.status(200).json({message:"Ok",profile});
});

// Register User
router.post("/", async(req,res)=>{
    const {email, name, password} = req.body;

    // validations
    if(!name){
        return res.status(422).json({message:"O nome é obrigatório!"})
    }

    if(!email){
        return res.status(422).json({message:"O Email é obrigatório!"})
    }

    if(!password){
        return res.status(422).json({message:"A senha é obrigatória!"})
    }

    // checking User
    let user = await UserModel.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists"});
    }

    // create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Save User Into Database
    user = new UserModel({email, name, password:passwordHash});
    await user.save();

    // Generate Token
    const jwtData = {_id: user._id, name:user.name};
    const token = jwt.sign(jwtData, process.env.JWTSECRET,{expiresIn: "2h"});

    res.status(201).json({message:"User Created with successfully",jwtData,token});
});

module.exports = router