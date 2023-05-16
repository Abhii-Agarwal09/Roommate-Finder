const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

const createAccessToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });
    return token;
};

const isLoggedIn = (req, res, next) => {
    const { jwtToken } = req.cookies;
    if (jwtToken) {
        jwt.verify(jwtToken, process.env.JWT_SECRET, (error, data) => {
            if (error) {
                console.log(error);
                return next();
            }
            req.body.studentId = data.studentId;
        });
        next();
    } else {
        return next();
    }
};

const findUser = async (req, res, next) => {
    // Get room id from request body
    const { studentId } = req.body;
    // Find student
    const student = await Student.findById(studentId);
    if (student && student.isVerified === true) {
        next();
    } else {
        // res.redirect('/');
        next();
        // res.json({
        //     success: false,
        //     message: 'Error',
        // });
    }
};

module.exports = {
    createAccessToken,
    isLoggedIn,
    findUser,
};
