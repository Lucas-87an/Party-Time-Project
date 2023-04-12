const router = require("express").Router();
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

// Login Router
router.post("/", async(req,res)=>{
    const {email, password} = req.body;

    // validations
    if(!email){
        return res.status(422).json({message:"O Email é obrigatório!"})
    }

    if(!password){
        return res.status(422).json({message:"A senha é obrigatória!"})
    }
    
    // check if user exists
    let user = await UserModel.findOne({email : email});
    if(!user){
        return res.status(400).json({message:"Invalid email or password"});
    }

    // checkPassword
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(422).json({message:"password invalid"});
    }

    // Generate Token
    const jwtData = {_id: user._id, name:user.name};
    const token = jwt.sign(jwtData, process.env.JWTSECRET,{expiresIn : "2h"});

    res.status(200).json({message:"logado com sucesso",jwtData, token});
});

module.exports = router