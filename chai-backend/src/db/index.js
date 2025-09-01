import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(
      `\n MONGODB Connected!!! DB_HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
