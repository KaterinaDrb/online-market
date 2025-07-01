"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./button";
import ShoppingCartIcon from "./ShoppingCartIcon";

const ProductCard = ({ name, oldPrice, newPrice, discount, image, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-64 h-96 shadow-md p-4 relative group hover:shadow-lg">
      {discount && (
        <p className="flex bg-secondary-100 text-secondary rounded-r-md w-12 h-8 items-center justify-center absolute left-0">
          {discount}
        </p>
      )}

      <div className="absolute right-2 top-20">
        <svg width="20" height="20">
          <circle
            cx="10"
            cy="10"
            r="6"
            fill="black"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg width="20" height="20">
          <circle
            cx="10"
            cy="10"
            r="6"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg width="20" height="20">
          <circle
            cx="10"
            cy="10"
            r="6"
            fill="grey"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg width="20" height="20">
          <line x1="10" y1="5" x2="10" y2="15" stroke="gray" strokeWidth="3" />
          <line x1="5" y1="10" x2="15" y2="10" stroke="gray" strokeWidth="3" />
        </svg>
      </div>

      <div className="flex justify-center items-center px-2 py-2">
        <Image
          src={image}
          alt={name}
          height={217}
          width={217}
          className="object-cover"
        ></Image>
      </div>

      <div className="bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-300 via-neutral-700 to-neutral-300 my-4"></div>

      <h1 className="text-base font-light my-4 truncate group-hover:text-primary-500 group-hover:font-medium">
        {name}
      </h1>

      <div className="flex justify-between items-end my-4 group-hover:hidden duration-1000">
        <div>
          <p className="text-xs font-normal text-neutral-500 line-through">
            {oldPrice}
          </p>
          <p className="text-xl font-light ">{newPrice}</p>
        </div>

        <div className="flex items-center">
          <Image src="/Star.svg" alt="star" height={20} width={20} />
          <p className="text-primary-500 font-medium text-base ml-1">
            {rating}
          </p>
        </div>
      </div>

      <div className="absolute bottom-2 left-0 right-0 p-4 items-center justify-between group-hover:flex hidden">
        <Button style="outlined" startIcon={ShoppingCartIcon}></Button>
        <Image src="/heart.svg" alt="heart" height={20} width={20} />
      </div>
    </div>
  );
};

export default ProductCard;
