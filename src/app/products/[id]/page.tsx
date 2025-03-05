import Product from "../../models/Product";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";

type ProductProps = {
  params: {
    id: string;
  };
};

const product = async ({ params }: ProductProps) => {
  const product = await Product.findById(params.id);

  return (
    <article className="flex flex-col items-center border border-b-red-400 p-2 rounded-b-3xl">
      <div className="flex items-center gap-2">
        <h3>{product?.title}</h3>
        <p>{product?.rating}</p>
        <div className="flex">
          <RiStarSFill />
        </div>
      </div>
      <p className="italic">{product?.category}</p>
      <p className="italic">{product?.brand}</p>
      <div className="flex justify-center">
        {product?.images.map((image, index) => {
          return (
            <Image
              src={image}
              alt="Image du produit"
              height={150}
              width={200}
              key={index}
              className=""
            />
          );
        })}
      </div>
      <p>{product?.description}</p>
      <p>{product?.price}€</p>
    </article>
  );
};

export default product;
