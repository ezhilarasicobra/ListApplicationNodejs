const mongoose = require('mongoose');
const { MONGODB_URI: url } = require('./utils/config');

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ezhil:ezhil@cluster0.pb8jx.mongodb.net/listapplication?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(`Error while connecting to MongoDB: `, error.message);
  }
};

module.exports = connectToDB;
