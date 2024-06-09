const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://janhavi:rQmucj9Elzgmanx3@cluster0.mei31i3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    

  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB