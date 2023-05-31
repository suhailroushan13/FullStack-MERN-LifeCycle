import mongoose from "mongoose";
let connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://USERNAME:PASSWORD@suhail.dktiuw2.mongodb.net/M9"
    );
    console.log("DB Connected Successfully 🚀");
  } catch (error) {
    console.log(error);
  }
};
connect();
