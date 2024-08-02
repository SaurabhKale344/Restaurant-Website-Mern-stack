import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [1, "First name must contain at least 1 character!"],
    maxlength: [30, "First name cannot exceed 30 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [1, "Last name must contain at least 1 character!"],
    maxlength: [30, "Last name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minlength: [10, "Phone number must be exactly 10 digits!"],
    maxlength: [10, "Phone number must be exactly 10 digits!"],
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits!"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
