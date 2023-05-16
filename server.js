const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const auth = require('./middlewares/auth');
const app = express();
const path = require('path');
const { originUrl } = require('./config');

require('dotenv').config({ path: './config/.env' });

const Student = require('./models/Student');
const StudentController = require('./middlewares/controllers/StudentController');

// DB connection
const connectDB = require('./config/db');
connectDB();

const { fileURLToPath } = require('url');
const { dirname } = require('path');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const corsOptions = {
  // origin: (origin, callback) => {
  //     callback(null, true);
  // },
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Set-Cookie',
  ],
  exposedHeaders: ['Set-Cookie'],
  credentials: true,
};

// middlewares
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// Route to verify user's email address
// app.get('/verify', (req, res, next) => {
//     // res.json({
//     //     success: true,
//     //     message: 'OTP verification page',
//     //     data: null,
//     // });
//     return res.sendFile(
//         'index.html',
//         {
//             root: path.resolve(__dirname, '../client/build'),
//         },
//         (error) => {
//             if (error) {
//                 console.log(error);
//                 return next();
//             } else {
//                 console.log('Sent');
//             }
//         }
//     );
// });

// app.post(
//     '/verify',
//     auth.isLoggedIn,
//     auth.findUser,
//     StudentController.verifyStudentAccount
// );

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Landing page',
  });
});

app.get('/signup', (req, res, next) => {
  res.json({
    success: true,
    message: 'Signup form',
    data: null,
  });
  // return res.sendFile(
  //     'index.html',
  //     {
  //         root: path.resolve(__dirname, '../client/build'),
  //     },
  //     (error) => {
  //         if (error) {
  //             console.log(error);
  //             next();
  //         } else {
  //             console.log('Sent');
  //         }
  //     }
  // );
});

app.post('/signup', StudentController.createAnewStudent);

// app.get('/login', auth.isLoggedIn, auth.findUser, (req, res, next) => {
//     // res.json({
//     //     success: true,
//     //     message: 'Login page',
//     //     data: null,
//     // });
//     return res.sendFile(
//         'index.html',
//         {
//             root: path.resolve(__dirname, '../client/build'),
//         },
//         (error) => {
//             if (error) {
//                 console.log(error);
//                 next();
//             } else {
//                 console.log('Sent');
//             }
//         }
//     );
//     // res.redirect('/dashboard');
// });

// app.post('/login', auth.isLoggedIn, auth.findUser, StudentController.login);

app.get('/dashboard', (req, res, next) => {
  res.json({
    success: true,
    message: 'Login page',
    data: null,
  });
  // return res.sendFile(
  //     'index.html',
  //     {
  //         root: path.resolve(__dirname, '../client/build'),
  //     },
  //     (error) => {
  //         if (error) {
  //             console.log(error);
  //             next();
  //         } else {
  //             console.log('Sent');
  //         }
  //     }
  // );
});

app.post(
  '/dashboard',
  // auth.isLoggedIn,
  // auth.findUser,
  StudentController.findStudentAndRoommates
);

// app.post('/logout', (req, res) => {
//     // Clear cookie
//     res.clearCookie('jwtToken');
//     // Redirect to home page
//     res.json({
//         success: true,
//         message: 'Student logged out',
//         data: null,
//     });
// });

//* Development Routes

// dev route to get all users
// app.get('/students', async (req, res) => {
//     const users = await Student.find();
//     res.json({
//         success: true,
//         message: 'All users',
//         data: users,
//     });
// });

// dev route to get delete all students
// app.delete('/deletestudents', async (req, res) => {
//     await Student.deleteMany();
//     res.json({
//         succes: true,
//         message: 'All students deleted',
//         data: null,
//     });
// });

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// Starting the app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
