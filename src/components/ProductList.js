import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 1.png",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 2.png",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$2490,87",
      discount: "-12%",
      image: "/MacBook 3.png",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$2490,87",
      discount: "-12%",
      image: "/MacBook 4.png",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 5.png",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$2490,87",
      discount: "-12%",
      image: "/MacBook 6.png",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      newPrice: "$2490,87",
      discount: "-12%",
      image: "/MacBook 7.png",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 8.png",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 9.png",
      rating: 4.9,
    },
    {
      id: 10,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$2,556.00",
      newPrice: "$2,165.10",
      discount: "-12%",
      image: "/MacBook 10.png",
      rating: 4.3,
    },
    {
      id: 11,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 11.png",
      rating: 4.9,
    },
    {
      id: 12,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      newPrice: "$2490,87",
      discount: "-12%",
      image: "/MacBook 12.png",
      rating: 4.3,
    },
    {
      id: 13,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$2490,87",
      discount: "-12%",
      image: "/MacBook 13.png",
      rating: 4.8,
    },
    {
      id: 14,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      oldPrice: "$1410.87",
      newPrice: "$1299.00",
      discount: "-12%",
      image: "/MacBook 14.png",
      rating: 4.9,
    },
    {
      id: 15,
      name: "Apple MacBook Air 1'' w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
      newPrice: "$2,365.00",
      discount: "-12%",
      image: "/MacBook 15.png",
      rating: 4.3,
    },
  ];

  return (
    <div className="flex justify-between flex-wrap gap-6 my-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
          discount={product.discount}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default ProductList;
