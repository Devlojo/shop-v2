import mongoose from "mongoose";

const connectToDbIfNot = async () => {
  if (mongoose.connection.readyState === 0) {
    return mongoose.connect("mongodb://localhost:27017/shopjsv2");
  }
};

export default connectToDbIfNot;
