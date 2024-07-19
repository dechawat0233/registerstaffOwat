const mongoose = require("mongoose");
require('dotenv').config(); // Ensure your .env file has the correct MongoDB URI

const User = require("./models/User"); // Make sure the path is correct

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  addStatusColumn();
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const addStatusColumn = async () => {
  try {
    const result = await User.updateMany({}, { $set: { status: "waiting" } });
    console.log(`Updated ${result.nModified} records.`);
    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating status:', error);
    mongoose.connection.close();
  }
};
