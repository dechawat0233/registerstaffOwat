// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

/////save 04/07/2024
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   image: { type: String }, // Store file path for image
//   choose: { type: [String], required: true }, // Array of strings for chosen options

// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
/////save 04/07/2024

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  // email: { type: String, unique: true, sparse: true }, // Add the email field
  // email: { type: String }, // Add the email field
  choose: { type: Array, default: [] },
  agency: { type: String },
  phone: { type: String },
  idNumber: { type: String },
  image: { type: String },
  startDate: { type: String },
  position: { type: String },
  agency2: { type: String },
  names: { type: String },
  age: { type: String },
  birthdate: { type: String },
  nationality: { type: String },
  ethnicity: { type: String },
  religion: { type: String },
  cardnumber: { type: String },
  country: { type: String },
  address: { type: String },
  etc: { type: String },
  phones: { type: String },
  contactPhone: { type: String },

  fatherName: { type: String },
  fatherAge: { type: String },
  fatherJob: { type: String },
  motherName: { type: String },
  motherAge: { type: String },
  motherJob: { type: String },
  familyStatus: { type: String },
  spouseName: { type: String },
  spouseNationality: { type: String },
  spouseJob: { type: String },
  spouseWorkplace: { type: String },
  spousePhone: { type: String },
  spouseMobile: { type: String },
  marriageRegistration: { type: String },
  child: { type: String },
  numChildren: { type: String },
  numChildrenStudying: { type: String },
  numChildrenUnder6: { type: String },
  birthdateChildrenUnder6: { type: String },
  employees: [
    {
      id: { type: Number },
      name: { type: String },
    },
  ],

  educationData: [
    {
      degree: { type: String },
      institution: { type: String },
      location: { type: String },
      duration: { type: String },
    },
  ],
  workHistory: [
    {
      position: { type: String },
      company: { type: String },
      duration: { type: String },
    },
  ],
  accountBook: { type: String },
  bankname: { type: String },
  bankBranch: { type: String },
  emergencyName: { type: String },
  parentContact: { type: String },
  Contact: { type: String },
  emergencyContact: { type: String },
  Contactt: { type: String },
  rideBicycle: { type: String },
  ridingMotorcycle: { type: String },
  driverLicenseType: { type: String },
  licenseNumber: { type: String },
  expiryDate: { type: String },
  canWorkAnyWhere: { type: String },
  reason: { type: String },
  documents: [
    {
      id: { type: Number },
      name: { type: String },
      file: { type: String },
    },
  ],
});

const User = mongoose.model("Register", userSchema);

module.exports = User;
