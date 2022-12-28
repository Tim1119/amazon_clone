import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [hasPrime,setHasPrime] = useState(null);

  useEffect(()=>{
    setHasPrime(Math.random() < 0.5)
  },[])

  return (
    <div className="relative flex  flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(Math.floor(rating.rate))
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5 ">
        <Currency
          quantity={price} // Required
        />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-6"
            src="https://links.papareact.com/fdw"
            alt=""
            srcset=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;
