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

const updateAllUsers = async () => {
  try {
    const result = await User.updateMany(
      {},
      { social_security: "haveSocial_Security", social_security_number: "นครปฐม" }
    );
    console.log('All user records updated:', result);
  } catch (error) {
    console.error('Error updating user records:', error);
  }
};

updateAllUsers().then(() => {
  mongoose.connection.close();
});
