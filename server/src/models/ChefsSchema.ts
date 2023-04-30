import { Date, Schema, model } from "mongoose";

export interface Chef {
  fName: string;
  lName: string;
  fullName: string;
  description: string;
  image: string;
  createdAt: Date;
  weekChef: boolean;
  newChef: boolean;
  viewed: number;
}

const chefSchema = new Schema<Chef>({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  weekChef: {
    type: Boolean,
    default: false,
  },
  newChef: {
    type: Boolean,
    default: false,
  },
  viewed: {
    type: Number,
    required: true,
  },
});

const ChefModel = model<Chef>("chefs", chefSchema);

export default ChefModel;
