import mongoose, { ObjectId, Schema, model, models } from "mongoose";

// Creation de l'interface représentant le document user dans mongoDB
export interface IUser {
  _id: ObjectId;
  username: string;
  email: string;
  token: string;
  salt: string;
  hash: string;
  admin: boolean;
}

// Creation du Schema correspondant à l'interface IUser
const userSchema = new Schema<IUser>({
  username: { type: String },
  email: { type: String },
  token: { type: String },
  salt: { type: String },
  hash: { type: String },
  admin: { type: Boolean },
});

const User =
  (models.User as mongoose.Model<IUser>) || model<IUser>("User", userSchema);

export default User;
