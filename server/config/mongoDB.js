import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("database connected"));

  await mongoose.connect('mongodb+srv://project1:project1@cluster0.nufowxo.mongodb.net/FirstDB');
};

export default connectDB;
