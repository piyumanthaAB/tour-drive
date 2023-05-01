import mongoose from "mongoose";

const dataTourSchema = new mongoose.Schema({
  districtname: {
    type: String,
    unique: true,
  },
  province: {
    type: String,
  },
});
