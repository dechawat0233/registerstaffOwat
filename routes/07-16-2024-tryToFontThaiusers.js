const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "documents") {
      cb(null, "uploads/documents");
    } else {
      cb(null, "uploads/");
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + encodeURIComponent(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.fields([{ name: "image" }, { name: "documents" }]), async (req, res) => {
  const documents = req.files["documents"]
    ? req.files["documents"].map((file, index) => ({
        id: index + 1,
        name: encodeURIComponent(file.originalname),
        file: file.path,
      }))
    : [];

  try {
    const user = new User({
      recordTime: req.body.recordTime,
      name: req.body.name,
      choose: JSON.parse(req.body.choose || "[]"),
      agency: req.body.agency,
      status: req.body.status,
      phone: req.body.phone,
      idNumber: req.body.idNumber,
      image: req.files["image"] ? req.files["image"][0].path : "",
      startDate: req.body.startDate,
      social_security: req.body.social_security,
      social_security_number: req.body.social_security_number,
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
      place_of_birth: req.body.place_of_birth,
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
      documents: documents,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error.message);
    console.error(error.stack); // Log the stack trace for debugging purposes
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
