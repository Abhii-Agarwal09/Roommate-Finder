const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    name: {
        type: String,
        trim: true,
    },
    regNumber: {
        type: String,
        trim: true,
    },
    hostelType: {
        type: String,
        trim: true,
    },
    roomNumber: {
        type: String,
        trim: true,
    },
    block: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    roomId: {
        type: String,
        trim: true,
    },
    // emailToken: String,
    // isVerified: {
    //     type: Boolean,
    //     default: false,
    // },
    // OTP: Number,
    emailSent: {
        type: Boolean,
        default: false,
    },
});

// StudentSchema.pre('save', function (next) {
//     const student = this;
//     // only hash the password if it has been modified (or is new)
//     if (!student.isModified('password')) return next();
//     // generate a salt
//     bcrypt.genSalt(10, function (err, salt) {
//         if (err) return next(err);
//         // hash the password using our new salt
//         bcrypt.hash(student.password, salt, function (err, hash) {
//             if (err) return next(err);
//             // override the cleartext password with the hashed one
//             student.password = hash;
//             next();
//         });
//     });
// });

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
