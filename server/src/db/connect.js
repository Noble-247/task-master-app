import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Attempting to connect to database.....");
    await mongoose.connect(process.env.MONGO_DB_URI, {});
    console.log("Connected to database.....");
  } catch (error) {
    console.log("Failed to connect to database.....", error.message);
    process.exit(1);
  }
};

export default connect;

/* 
USERNAME: noble4special247
PWD: WTzcfeBKz3QiM0Lv

*/
