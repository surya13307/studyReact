const user = require('../models/user')
const User = require('../models/user')




exports.getUserById = (req,res,next,id) => {
    User.findById(id).exec((err,user)=>{
        if (err || !user){
            res.status(400).json({
                error:"no user found"
            })
        }
        req.profile = user
        next();
    })
}

exports.getUser = (req,res) =>{
    //NOTE :removing unnecessary data on the go
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    req.profile.__v = undefined;
    return res.json(req.profile)
}

exports.getUsersId = (req,res) =>{
    User.find().exec((err,user)=>{
        if (err || !user){
            res.status(400).json({
                error:"no user found"
            })
        }
        return res.json (req.profile = user)
        
    })}

