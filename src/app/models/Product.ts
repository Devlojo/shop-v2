import mongoose, { ObjectId, Schema, model, models } from "mongoose";

// Creation de l'interface représentant le document products dans mongoDB
export interface IProduct {
  _id: ObjectId;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: [string];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: Date;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  images: [string];
  thumbnail: string;
}

// Creation du Schema correspondant à l'interface IProduct
const productSchema = new Schema<IProduct>({
  title: { type: String },
  description: { type: String },
  category: { type: String },
  price: { type: Number },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  tags: [{ type: String }],
  brand: { type: String },
  sku: { type: String },
  weight: { type: Number },
  dimensions: {
    width: { type: Number },
    height: { type: Number },
    depth: { type: Number },
  },
  warrantyInformation: { type: String },
  shippingInformation: { type: String },
  availabilityStatus: { type: String },
  reviews: [
    {
      rating: { type: Number },
      comment: { type: String },
      date: { type: Date },
      reviewerName: { type: String },
      reviewerEmail: { type: String },
    },
  ],
  returnPolicy: { type: String },
  minimumOrderQuantity: { type: Number },
  images: [{ type: String }],
  thumbnail: { type: String },
});

// Verification si le produit est existant ou non
const Product =
  (models.Product as mongoose.Model<IProduct>) ||
  model<IProduct>("Product", productSchema);

export default Product;
