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

const addressSchema = new mongoose.Schema({
  addressNumber: { type: String, default: "" },
  addressVillage: { type: String, default: "" },
  addressAlley: { type: String, default: "" },
  addressRoad: { type: String, default: "" },
  addressSubdistrict: { type: String, default: "" },
  addressDistrict: { type: String, default: "" },
  addressProvince: { type: String, default: "" },
  addressPostalNumber: { type: String, default: "" }
});

const addressForContact = new mongoose.Schema({
  addressContactNumber: { type: String, default: "" },
  addressContactVillage: { type: String, default: "" },
  addressContactAlley: { type: String, default: "" },
  addressContactRoad: { type: String, default: "" },
  addressContactSubdistrict: { type: String, default: "" },
  addressContactDistrict: { type: String, default: "" },
  addressContactProvince: { type: String, default: "" },
  addressContactPostalNumber: { type: String, default: "" }
});

const userSchema = new mongoose.Schema({
  recordTime: { type: Date, default: Date.now },
  name: { type: String },
  // email: { type: String, unique: true, sparse: true }, // Add the email field
  // email: { type: String }, // Add the email field
  choose: { type: Array, default: [] },
  agency: { type: String },
  // status: { type: String },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'], // Define the allowed statuses
    default: 'active'
  },
  phone: { type: String },
  idNumber: { type: String },
  image: { type: String },
  startDate: { type: String },
  social_security: { type: String },
  social_security_number: { type: String },
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
  place_of_birth: { type: String },
  addressForNumberID: { type: addressSchema, default: {} },
  addressForContact: { type: addressForContact, default: {} },
  address: { type: String },
  etc: { type: String },
  HomePhone: { type: String },
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
      duration: { type: String },
      workplace: { type: String },
      position: { type: String },
      lastSalary: { type: String },
      reasonForLeaving: { type: String },
      
    },
  ],
  accountBook: { type: String },
  bankname: { type: String },
  bankBranch: { type: String },
  emergencyName: { type: String },
  relevant: { type: String },
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
},);

const User = mongoose.model("Register", userSchema);

module.exports = User;
