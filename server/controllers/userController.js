const AppError = require('../utils/AppError');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================


// ######### controllers START #############



// @ DESCRIPTION            =>  create user account
// @ ENDPOINT               =>  api/v1/users [POST]
// @ ACCESS                 =>  'admin'
// @ CREATED BY             =>  piyumantha
// @ CREATED DATE & TIME    =>  2022/12/6 @ 7.10pm
exports.createUser = catchAsync(async (req, res,next) => {
    
    const { email, name } = req.body;

     const newUser = await User.create({email,name});


    res.status(201).json({
        status: 'success',
        msg: 'user account created successfully',
        data: {
            newUser
        }
    })
})


// ######### controllers END #############
