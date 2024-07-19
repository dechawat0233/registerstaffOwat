const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const updateUserImage = async (userId, newImagePath) => {
  try {
    const result = await User.findByIdAndUpdate(
      userId,
      { image: newImagePath },
      { new: true }
    );
    console.log('User image updated:', result);
  } catch (error) {
    console.error('Error updating user image:', error);
  }
};

const userId = '668b7350f8222737844aba90';
// const newImagePath = '1719894081852.png';
const newImagePath = 'uploads\\1719894081852.png';

updateUserImage(userId, newImagePath).then(() => {
  mongoose.connection.close();
});
