import Product from "@/app/models/Product";
import ProductsList from "../components/ProductsList";

const productsPage = async () => {
  const products = await Product.find();

  return <ProductsList products={JSON.parse(JSON.stringify(products))} />;
};

export default productsPage;
