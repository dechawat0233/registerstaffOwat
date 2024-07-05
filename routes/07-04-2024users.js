// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

////////////////////////////

// var express = require("express");
// var router = express.Router();
// var User = require("../models/User");

// // Get all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create a new user
// router.post("/", async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;

//01/07/2024

// const express = require("express");
// const router = express.Router();
// const multer = require("multer"); // Import multer
// const path = require("path");
// const User = require("../models/User");

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Specify the directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
//   },
// });

// // Initialize multer upload middleware
// const upload = multer({ storage: storage });

// // Get all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Create a new user with file upload
// // router.post("/", upload.single("image"), async (req, res) => {
// //   const user = new User({
// //     name: req.body.name,
// //     email: req.body.email,
// //     password: req.body.password,
// //     // Assuming 'image' is the field name for the uploaded file
// //     image: req.file ? req.file.path : null, // Save file path to database if uploaded
// //   });

// router.post('/', upload.single('image'), async (req, res) => {
//   const { name, email, password, choose } = req.body;
//   const imagePath = req.file ? req.file.path : null;

//   const user = new User({
//     name,
//     email,
//     password,
//     image: imagePath,
//     choose: JSON.parse(choose), // Parse the choose array from JSON string
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;

///04/07/2024

const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new user
// router.post("/", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'documents', maxCount: 10 }]), async (req, res) => {
router.post(
  "/",
  upload.fields([{ name: "image" }, { name: "documents" }]),
  async (req, res) => {
    const user = new User({
      // name: req.body.name,
      // // choose: req.body.choose,
      // choose: JSON.parse(req.body.choose || "[]"),
      // agency: req.body.agency,
      // phone: req.body.phone,
      // idNumber: req.body.idNumber,
      // image: req.files['image'] ? req.files['image'][0].path : null,
      // startDate: req.body.startDate,
      // position: req.body.position,
      // agency2: req.body.agency2,
      // names: req.body.names,
      // age: req.body.age,
      // birthdate: req.body.birthdate,
      // nationality: req.body.nationality,
      // ethnicity: req.body.ethnicity,
      // religion: req.body.religion,
      // cardnumber: req.body.cardnumber,
      // country: req.body.country,
      // address: req.body.address,
      // etc: req.body.etc,
      // phones: req.body.phones,
      // contactPhone: req.body.contactPhone,
      // fatherName: req.body.fatherName,
      // fatherAge: req.body.fatherAge,
      // fatherJob: req.body.fatherJob,
      // motherName: req.body.motherName,
      // motherAge: req.body.motherAge,
      // motherJob: req.body.motherJob,
      // familyStatus: req.body.familyStatus,
      // spouseName: req.body.spouseName,
      // spouseNationality: req.body.spouseNationality,
      // spouseJob: req.body.spouseJob,
      // spouseWorkplace: req.body.spouseWorkplace,
      // spousePhone: req.body.spousePhone,
      // spouseMobile: req.body.spouseMobile,
      // marriageRegistration: req.body.marriageRegistration,
      // child: req.body.child,
      // numChildren: req.body.numChildren,
      // numChildrenStudying: req.body.numChildrenStudying,
      // numChildrenUnder6: req.body.numChildrenUnder6,
      // birthdateChildrenUnder6: req.body.birthdateChildrenUnder6,
      // employees: req.body.employees,
      // educationData: req.body.educationData,
      // workHistory: req.body.workHistory,
      // accountBook: req.body.accountBook,
      // bankname: req.body.bankname,
      // bankBranch: req.body.bankBranch,
      // emergencyName: req.body.emergencyName,
      // parentContact: req.body.parentContact,
      // Contact: req.body.Contact,
      // emergencyContact: req.body.emergencyContact,
      // Contactt: req.body.Contactt,
      // rideBicycle: req.body.rideBicycle,
      // ridingMotorcycle: req.body.ridingMotorcycle,
      // driverLicenseType: req.body.driverLicenseType,
      // licenseNumber: req.body.licenseNumber,
      // expiryDate: req.body.expiryDate,
      // canWorkAnyWhere: req.body.canWorkAnyWhere,
      // reason: req.body.reason,
      // documents: req.files['documents'] ? req.files['documents'].map(file => ({ name: file.originalname, file: file.path })) : [],

      name: req.body.name,
      choose: JSON.parse(req.body.choose || "[]"),
      agency: req.body.agency,
      phone: req.body.phone,
      idNumber: req.body.idNumber,
      image: req.files["image"] ? req.files["image"][0].path : null,
      startDate: req.body.startDate,
      position: req.body.position,
      agency2: req.body.agency2,
      names: req.body.names,
      age: req.body.age,
      birthdate: req.body.birthdate,
      nationality: req.body.nationality,
      ethnicity: req.body.ethnicity,
      religion: req.body.religion,
      cardnumber: req.body.cardnumber,
      country: req.body.country,
      address: req.body.address,
      etc: req.body.etc,
      phones: req.body.phones,
      contactPhone: req.body.contactPhone,
      fatherName: req.body.fatherName,
      fatherAge: req.body.fatherAge,
      fatherJob: req.body.fatherJob,
      motherName: req.body.motherName,
      motherAge: req.body.motherAge,
      motherJob: req.body.motherJob,
      familyStatus: req.body.familyStatus,
      spouseName: req.body.spouseName,
      spouseNationality: req.body.spouseNationality,
      spouseJob: req.body.spouseJob,
      spouseWorkplace: req.body.spouseWorkplace,
      spousePhone: req.body.spousePhone,
      spouseMobile: req.body.spouseMobile,
      marriageRegistration: req.body.marriageRegistration,
      child: req.body.child,
      numChildren: req.body.numChildren,
      numChildrenStudying: req.body.numChildrenStudying,
      numChildrenUnder6: req.body.numChildrenUnder6,
      birthdateChildrenUnder6: req.body.birthdateChildrenUnder6,
      employees: JSON.parse(req.body.employees || "[]"),
      educationData: JSON.parse(req.body.educationData || "[]"),
      workHistory: JSON.parse(req.body.workHistory || "[]"),
      accountBook: req.body.accountBook,
      bankname: req.body.bankname,
      bankBranch: req.body.bankBranch,
      emergencyName: req.body.emergencyName,
      parentContact: req.body.parentContact,
      Contact: req.body.Contact,
      emergencyContact: req.body.emergencyContact,
      Contactt: req.body.Contactt,
      rideBicycle: req.body.rideBicycle,
      ridingMotorcycle: req.body.ridingMotorcycle,
      driverLicenseType: req.body.driverLicenseType,
      licenseNumber: req.body.licenseNumber,
      expiryDate: req.body.expiryDate,
      canWorkAnyWhere: req.body.canWorkAnyWhere,
      reason: req.body.reason,
      documents: req.files["documents"]
        ? req.files["documents"].map((file) => ({
            name: file.originalname,
            file: file.path,
          }))
        : [],
    });

    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);

      res.status(400).json({ message: error.message });
    }
  }
);

module.exports = router;

//////////////////////////
// const express = require("express");
// const multer = require("multer");
// const User = require("../models/User");
// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post(
//   "/",
//   upload.fields([{ name: "image" }, { name: "documents" }]),
//   async (req, res) => {
//     try {
//       console.log("Request body:", req.body);
//       console.log("Request files:", req.files);

//       const user = new User({
//         name: req.body.name,
//         choose: JSON.parse(req.body.choose || "[]"),
//         agency: req.body.agency,
//         phone: req.body.phone,
//         idNumber: req.body.idNumber,
//         image: req.files["image"] ? req.files["image"][0].path : null,
//         startDate: req.body.startDate,
//         position: req.body.position,
//         agency2: req.body.agency2,
//         names: req.body.names,
//         age: req.body.age,
//         birthdate: req.body.birthdate,
//         nationality: req.body.nationality,
//         ethnicity: req.body.ethnicity,
//         religion: req.body.religion,
//         cardnumber: req.body.cardnumber,
//         country: req.body.country,
//         address: req.body.address,
//         etc: req.body.etc,
//         phones: req.body.phones,
//         contactPhone: req.body.contactPhone,
//         fatherName: req.body.fatherName,
//         fatherAge: req.body.fatherAge,
//         fatherJob: req.body.fatherJob,
//         motherName: req.body.motherName,
//         motherAge: req.body.motherAge,
//         motherJob: req.body.motherJob,
//         familyStatus: req.body.familyStatus,
//         spouseName: req.body.spouseName,
//         spouseNationality: req.body.spouseNationality,
//         spouseJob: req.body.spouseJob,
//         spouseWorkplace: req.body.spouseWorkplace,
//         spousePhone: req.body.spousePhone,
//         spouseMobile: req.body.spouseMobile,
//         marriageRegistration: req.body.marriageRegistration,
//         child: req.body.child,
//         numChildren: req.body.numChildren,
//         numChildrenStudying: req.body.numChildrenStudying,
//         numChildrenUnder6: req.body.numChildrenUnder6,
//         birthdateChildrenUnder6: req.body.birthdateChildrenUnder6,
//         employees: JSON.parse(req.body.employees || "[]"),
//         educationData: JSON.parse(req.body.educationData || "[]"),
//         workHistory: JSON.parse(req.body.workHistory || "[]"),
//         accountBook: req.body.accountBook,
//         bankname: req.body.bankname,
//         bankBranch: req.body.bankBranch,
//         emergencyName: req.body.emergencyName,
//         parentContact: req.body.parentContact,
//         Contact: req.body.Contact,
//         emergencyContact: req.body.emergencyContact,
//         Contactt: req.body.Contactt,
//         rideBicycle: req.body.rideBicycle,
//         ridingMotorcycle: req.body.ridingMotorcycle,
//         driverLicenseType: req.body.driverLicenseType,
//         licenseNumber: req.body.licenseNumber,
//         expiryDate: req.body.expiryDate,
//         canWorkAnyWhere: req.body.canWorkAnyWhere,
//         reason: req.body.reason,
//         documents: req.files["documents"]
//           ? req.files["documents"].map((file) => ({
//               name: file.originalname,
//               file: file.path,
//             }))
//           : [],
//       });

//       const newUser = await user.save();
//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).json({ message: error.message });
//     }
//   }
// );

// module.exports = router;
