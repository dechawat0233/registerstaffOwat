const mongoose = require('mongoose');
const User = require('./models/User'); // Ensure this path is correct
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const updateUserWorkHistory = async (userId, newWorkHistory) => {
  try {
    const result = await User.findByIdAndUpdate(
      userId,
      { workHistory: newWorkHistory },
      { new: true }
    );
    console.log('User work history updated:', result);
  } catch (error) {
    console.error('Error updating user work history:', error);
  }
};

const userId = '668b7350f8222737844aba90';
const newWorkHistory = [
  {
    _id: "668b7350f8222737844aba99",
    duration: "wwwww",
    workplace: "wwww",
    position: "www",
    lastSalary: "ww",
    reasonForLeaving: "w",
  },
  {
    _id: "668b7350f8222737844aba9a",
    duration: "ggggg",
    workplace: "gggg",
    position: "ggg",
    lastSalary: "gg",
    reasonForLeaving: "g",
  },
  {
    _id: "668b7350f8222737844aba9b",
    duration: "xxxxx",
    workplace: "xxxx",
    position: "xxx",
    lastSalary: "xx",
    reasonForLeaving: "x",
  }
];

updateUserWorkHistory(userId, newWorkHistory).then(() => {
  mongoose.connection.close();
});
