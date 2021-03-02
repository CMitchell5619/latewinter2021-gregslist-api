import HouseSchema from "../models/House";
import CarSchema from "../models/Car";
import mongoose from "mongoose";

class DbContext {
  Houses = mongoose.model("House", HouseSchema);
  Cars = mongoose.model("Car", CarSchema);
}

export const dbContext = new DbContext();
