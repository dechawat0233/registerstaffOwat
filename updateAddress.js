const mongoose = require("mongoose");
const User = require("./models/User"); // Ensure this path is correct
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const updateAddress = async (userId, newaddressForNumberID, newaddressForContact) => {
  try {
    const result = await User.findByIdAndUpdate(
      userId,
      {
        addressForNumberID: newaddressForNumberID,
        addressForContact: newaddressForContact
      },
      { new: true }
    );
    console.log("User address updated:", result);
  } catch (error) {
    console.error("Error updating user address:", error);
  }
};

const userId = "668b7350f8222737844aba90";
const newaddressForNumberID = {
  addressNumber: "qqq",
  addressVillage: "wwww",
  addressAlley: "eeee",
  addressRoad: "rrrr",
  addressSubdistrict: "iiii",
  addressDistrict: "uuuu",
  addressProvince: "yyyy",
  addressPostalNumber: "tttt",
};

const newaddressForContact = {
  addressContactNumber: "ผผผ",
  addressContactVillage: "ปปป",
  addressContactAlley: "แแแ",
  addressContactRoad: "อออ",
  addressContactSubdistrict: "ๆๆๆ",
  addressContactDistrict: "กกก",
  addressContactProvince: "หหห",
  addressContactPostalNumber: "ฟฟฟ",
};

updateAddress(userId, newaddressForNumberID, newaddressForContact).then(() => {
  mongoose.connection.close();
});
