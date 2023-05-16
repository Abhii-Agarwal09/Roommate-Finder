const Student = require('../../models/Student');
const verifyEmailGenerator = require('../verifyEmail');
const roommateFoundEmailGenerator = require('../newRoommateFound');
const auth = require('../auth');
const bcrypt = require('bcrypt');
require('dotenv').config({ path: './config/.env' });

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const { fileURLToPath } = require('url');
const path = require('path');
const { dirname } = require('path');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const formData = require('form-data');
const Mailgun = require('mailgun.js');
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
// username: 'vitrendz',
//     key: process.env.MAILGUN_API_KEY,
// });

// creating a transporter to send emails using nodemailer

// const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URI
// );

// oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
// });

// const sendMail = async (student, toEmail, OTP) => {
//     try {
//         // const accessToken = await oauth2Client.getAccessToken();
//         // const transporter = nodemailer.createTransport({
//         //     service: 'gmail',
//         //     auth: {
//         //         type: 'OAuth2',
//         //         user: process.env.EMAIL,
//         //         clientId: process.env.CLIENT_ID,
//         //         clientSecret: process.env.CLIENT_SECRET,
//         //         refreshToken: process.env.REFRESH_TOKEN,
//         //         accessToken: accessToken,
//         //     },
//         // });
//         const studentEmailVerificationHtml = verifyEmailGenerator(student, OTP);
//         // const mailOptions = {
//         //     from: process.env.EMAIL,
//         //     to: toEmail,
//         //     subject: 'Rommate finder account verification email',
//         //     html: studentEmailVerificationHtml,
//         // };
//         // const result = await transporter.sendMail(mailOptions);
//         mg.messages
//             .create('sandbox036569df48ce4add93b9afd3a3b3a824.mailgun.org', {
//                 from: process.env.EMAIL,
//                 to: toEmail,
//                 subject: 'Roommate Finder account verification email',
//                 html: studentEmailVerificationHtml,
//             })
//             .then((msg) => console.log(msg))
//             .catch((err) => console.log(err));
//         // return result;
//     } catch (error) {
//         return console.log(error);
//     }
// };

const sendRoommateFoundMail = async (roommate) => {
  try {
    // const accessToken = await oauth2Client.getAccessToken();
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         type: 'OAuth2',
    //         user: process.env.EMAIL,
    //         clientId: process.env.CLIENT_ID,
    //         clientSecret: process.env.CLIENT_SECRET,
    //         refreshToken: process.env.REFRESH_TOKEN,
    //         accessToken: accessToken,
    //     },
    // });
    const roommateFoundHtml = roommateFoundEmailGenerator(roommate.name);
    // const mailOptions = {
    //     from: process.env.EMAIL,
    //     to: roommate.email,
    //     subject: 'Hey! You found your roommate',
    //     html: roommateFoundHtml,
    // };
    // const result = await transporter.sendMail(mailOptions);
    // mg.messages
    //     .create('vitrendz.com', {
    //         from: process.env.EMAIL,
    //         to: roommate.email,
    //         subject: 'Hey! You found your roommate',
    //         html: roommateFoundHtml,
    //     })
    //     .then((msg) => console.log(msg))
    //     .catch((err) => console.log(err));
    // console.log("Email sent.... " + result.response);
    // return result;
  } catch (error) {
    return console.log(error);
  }
};

// Helper Function that takes user details object as input and return the generated roomId for the user
const createStudentRoomId = (studentDetails) => {
  const studentGender = studentDetails.hostelType == 'Mens' ? 'M' : 'L';
  const studentHostelBlock = studentDetails.block;
  const studentRoomNumber = studentDetails.roomNumber;
  const studentRoomId = `${studentGender}H-${studentHostelBlock}-${studentRoomNumber}`;
  return studentRoomId;
};

// Middleware function to verify student email address
// const verifyStudentAccount = async (req, res, next) => {
//     try {
//         // Get student id  and otp from request body
//         const { studentId, OTP } = req.body;
//         // Find student and match OTP
//         const student = await Student.findById(studentId);
//         if (student.OTP == OTP) {
//             (student.isVerified = true), await student.save();
//             res.json({
//                 success: true,
//                 message: 'OTP verified',
//                 data: student,
//             });
//         } else {
//             res.json({
//                 success: false,
//                 message: 'OTP not verified',
//                 data: student,
//             });
//         }
//     } catch (error) {
//         return console.log(error);
//     }
// };

const sendFoundMails = async (roommate) => {
  const result = await sendRoommateFoundMail(roommate);
};

// Create a new student
const createAnewStudent = async (req, res, next) => {
  try {
    // Check if student already have an account
    // const { studentId } = req.body;
    // if (studentId) {
    //     // Find student
    //     const student = await Student.findById(studentId);
    //     if (student.isVerified) {
    //         return res.json({
    //             success: true,
    //             message: 'Student logged in',
    //             // data: student,
    //             redirectUrl: '/dashboard',
    //         });
    //     }
    //     if (!student.isVerified) {
    //         return res.json({
    //             success: false,
    //             message: 'Account not verified',
    //         });
    //     }
    //     // res.redirect('/dashboard');
    // }
    // Get all the data from request body
    const {
      name,
      email,
      regNumber,
      hostelType,
      roomNumber,
      block,
      phoneNumber,
    } = req.body;

    // Check if student already exits
    const studentCheck = await Student.findOne({ email });
    if (studentCheck) {
      return res.json({
        success: false,
        message: 'Student already exits',
      });
    }
    // Generate room id
    const studentRoomId = createStudentRoomId(req.body);
    const hash = crypto
      .createHash('sha256')
      .update(studentRoomId)
      .digest('base64');

    // Generate OTP
    // const OTP = Math.floor(Math.random() * 9999 + 1);
    // Create student
    const student = new Student({
      name,
      email,
      regNumber,
      hostelType,
      roomNumber,
      block,
      roomId: hash,
      phoneNumber,
    });
    await student.save();
    // Send otp mail
    // const result = await sendMail(student, email, OTP);
    // Create jwt token and set cookie
    // const token = auth.createAccessToken({
    //     studentId: student._id,
    // });
    // res.cookie('jwtToken', token, {
    //     expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    //     secure: true,
    //     httpOnly: true,
    //     sameSite: 'None',
    // });
    // Send response with otp in it
    res.json({
      success: true,
      message: 'New Student Created',
      // data: student,
    });
  } catch (error) {
    return console.log(error);
  }
};

// Function to login a student
// const login = async (req, res) => {
//     // Get student id from request body
//     const { studentId } = req.body;
//     // If id present, find student
//     if (studentId) {
//         // Find student
//         const student = await Student.findById(studentId);
//         if (student.isVerified) {
//             return res.json({
//                 success: true,
//                 message: 'Student logged in',
//                 // data: student,
//                 redirectUrl: '/dashboard',
//             });
//         }
//         if (!student.isVerified) {
//             return res.json({
//                 success: false,
//                 message: 'Account not verified',
//             });
//         }
//         // res.redirect('/dashboard');
//     } else {
//         // Get email and password from request body
//         const { email, password } = req.body;
//         // Find student with email
//         const stu = await Student.findOne({ email });
//         if (!stu) {
//             return res.json({
//                 success: false,
//                 message: 'Student does not exit',
//                 data: null,
//             });
//         }
//         // Compare password
//         bcrypt.compare(password, stu.password, (error, isMatch) => {
//             if (error) {
//                 console.log(error);
//                 next();
//             }
//             if (isMatch) {
//                 // Settinng the jwt token cookie
//                 const token = auth.createAccessToken({
//                     studentId: stu._id,
//                 });
//                 res.cookie('jwtToken', token, {
//                     expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//                     secure: true,
//                     httpOnly: true,
//                     sameSite: 'None',
//                 });
//                 // sending the response
//                 return res.json({
//                     success: true,
//                     message: 'Student logged in successfully',
//                     data: stu,
//                     redirectUrl: '/dashbaord',
//                 });
//                 // res.redirect('/dashboard');
//             }
//         });
//     }
// };
// Middleware function to find the user with a given id and its roommates
const findStudentAndRoommates = async (req, res, next) => {
  try {
    // getting user id from request body
    const { email } = req.body;
    // finding a user with the id in database
    const student = await Student.findOne({ email });
    if (!student) {
      return res.json({
        success: false,
        message: 'Student not found',
      });
    }
    if (student.roomId === '') {
      return res.json({
        success: false,
        message:
          "Zyada dimag mat lagao, room details bharo (Don't use your brains, fill your room details)",
      });
    }
    // finding all the users with the room id of user
    const studentsInSameRoom = await Student.aggregate([
      { $match: { roomId: student.roomId } },
    ]);
    // filtering out the roommates of the user
    const studentsRoommates = studentsInSameRoom.filter(
      (student) => student.email != email
    );
    // Send email to rommates for first time to notify they
    if (studentsRoommates.length > 0 && student.emailSent === false) {
      // studentsRoommates.forEach((roommate) => {
      //     sendFoundMails(roommate);
      // });
      // student.emailSent = true;
      // await student.save();
      const updateEmailSent = await Student.updateMany(
        { roomId: student.roomId },
        { emailSent: true }
      );
    }
    // sending the response
    res.json({
      success: true,
      message: 'Student dashboard',
      student: student,
      studentRoommates: studentsRoommates,
    });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {
  findStudentAndRoommates,
  // getRoomDetailsForm,
  // verifyStudentAccount,
  createAnewStudent,
  // login,
};
