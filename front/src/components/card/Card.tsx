/* eslint-disable @next/next/no-img-element */
import { Iproducts } from "@/interfaces/Types";
import Link from "next/link";

const Card: React.FC<Iproducts> = ({
  id,
  name,
  price,
  description,
  image,
  categoryId,
  stock,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-700 w-full max-w-xs hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-scale-down rounded-t-lg"
        />
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <p className="text-gray-500 mb-2">Precio: ${price}</p>
          <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
          <p className="text-xs text-gray-400">Categoría: {categoryId}</p>
          <p className="text-xs text-gray-400">Stock: {stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
