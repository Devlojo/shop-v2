import mongoose, { ObjectId, Schema, model, models } from "mongoose";

// Creation de l'interface représentant le document Order dans mongoDB
export interface IOrder {
  _id: ObjectId;
  owner: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "User";
  };
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId;
        ref: "Product";
      };
      quantity: number;
    }
  ];
  price: number;
  delivered: boolean;
  address: string;
}

// Creation du Schema correspondant à l'interface IOrder
const orderSchema = new Schema<IOrder>({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  price: Number,
  delivered: Boolean,
  address: String,
});

const Order =
  (models.Order as mongoose.Model<IOrder>) ||
  model<IOrder>("Order", orderSchema);

export default Order;
