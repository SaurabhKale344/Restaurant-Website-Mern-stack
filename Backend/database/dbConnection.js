import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Restaurantwebsite",
    })
    .then(() => {
      console.log("Connected to databse successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};
