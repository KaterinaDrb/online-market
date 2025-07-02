"use client";
import Image from "next/image";
import Button from "../../../../components/button";
import { products } from "../../../../components/ProductList";
import ProductCard from "../../../../components/ProductCard";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const startIndex = product.id;
  const endIndex = startIndex + 4;

  const productsLength = products.length;

  const selectedProducts = [];
  for (let i = startIndex; i < endIndex; i++) {
    selectedProducts.push(products[i % productsLength]);
  }

  return (
    <div className="mx-20 my-16">
      <div className="flex">
        <div>
          <div className="flex w-3xl">
            <Image
              src={product.image}
              alt="macbook"
              height={0}
              width={370}
              className="object-cover"
            ></Image>

            <div className="w-full mx-6">
              <h1 className="font-medium text-xl">{product.name}</h1>

              <div className="flex items-center text-xs font-medium my-2">
                <div className="flex items-center justify-center bg-primary-500 rounded-sm p-1 w-fit ">
                  <Image src="/star 1.png" alt="star" height={16} width={16} />
                  <p className="text-white font-medium text-xs ml-1">
                    {product.rating}
                  </p>
                </div>

                <svg width="20" height="25">
                  <line
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="25"
                    stroke="gray"
                    strokeWidth="1"
                  />
                </svg>
                <p className="text-neutral-500">sold 125</p>
              </div>

              <div className="flex my-6 justify-between text-xs text-neutral-500 font-light">
                <div className="flex items-center gap-2 ">
                  <Image
                    src="/shop.svg"
                    alt="In Stock"
                    width={20}
                    height={20}
                  ></Image>
                  <h1>In Stock</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/verify.svg"
                    alt="Guaranteed"
                    width={20}
                    height={20}
                  ></Image>
                  <h1>Guaranteed</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/truck.svg"
                    alt="Free Delivery"
                    width={20}
                    height={20}
                  ></Image>
                  <h1>Free Delivery</h1>
                </div>
              </div>

              <div className="flex">
                <h1 className="my-4 font-light text-base mr-6">Select color</h1>
                <svg width="32" height="40">
                  <circle cx="20" cy="28" r="12" fill="grey" />
                </svg>
                <svg width="32" height="40">
                  <circle cx="20" cy="28" r="12" fill="black" />
                </svg>
              </div>

              <table className="font-medium text-xs info">
                <tbody>
                  <tr>
                    <td className="text-gray-500 w-40">
                      <ul className="list-disc list-inside">
                        <li>brand</li>
                      </ul>
                    </td>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500">
                      <ul className="list-disc list-inside">
                        <li>Model Name</li>
                      </ul>
                    </td>
                    <td>{product.ModelName}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500">
                      <ul className="list-disc list-inside">
                        <li>Screen Size</li>
                      </ul>
                    </td>
                    <td>{product.ScreenSize}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500">
                      <ul className="list-disc list-inside">
                        <li>Hard Disk Size</li>
                      </ul>
                    </td>
                    <td>{product.ScreenSize}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500">
                      <ul className="list-disc list-inside">
                        <li>CPU Model</li>
                      </ul>
                    </td>
                    <td>{product.CPUModel}</td>
                  </tr>
                </tbody>
              </table>
              <Link
                href="/moreabout"
                className="text-primary text-xs font-medium hover:text-primary-500 focus:outline-none"
              >
                Show more
              </Link>
            </div>
          </div>

          <div className="my-8">
            <h1 className="font-medium text-xl my-2">Technical Details</h1>
            <table className="table-striped min-w-full px-4 py-4 text-base text-neutral-500">
              <tbody>
                <tr>
                  <td className="font-medium">Display</td>
                  <td>{product.Display}</td>
                </tr>
                <tr>
                  <td className="font-medium">Graphics</td>
                  <td>{product.Graphics}</td>
                </tr>
                <tr>
                  <td className="font-medium">Processor</td>
                  <td>{product.Processor}</td>
                </tr>
                <tr>
                  <td className="font-medium">In the box</td>
                  <td>{product.InTheBox}</td>
                </tr>
                <tr>
                  <td className="font-medium">Height</td>
                  <td>{product.Height}</td>
                </tr>
                <tr>
                  <td className="font-medium">Width</td>
                  <td>{product.Width}</td>
                </tr>
              </tbody>
            </table>
            <Link
              href="/moreabout"
              className="text-primary text-xs font-medium hover:text-primary-500 focus:outline-none"
            >
              Show more
            </Link>
          </div>
        </div>

        <div className="w-64 h-fit rounded-lg shadow-md p-4 mx-2">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-xl font-medium">{product.newPrice}</h1>
              <p className="text-neutral-500 text-sm font-light">
                {product.oldPrice && `last price ${product.oldPrice}`}
              </p>
            </div>

            {product.discount && (
              <div className="flex items-center">
                <Image
                  src="/discount-shape.svg"
                  alt="discount"
                  width={20}
                  height={20}
                ></Image>
                <h1 className="text-secondary text-sm font-medium">
                  {product.discount}
                </h1>
              </div>
            )}
          </div>

          <div className="flex flex-col my-4 items-center">
            <Button label="Buy now" />
            <div style={{ margin: "6px 0" }} />
            <Button style="outlined" />
          </div>
        </div>
      </div>

      <h1 className="font-medium text-xl my-2">Similar Products</h1>

      <div className="flex my-8 gap-2">
        {selectedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={<Link href={`/products/${product.id}`}>{product.name}</Link>}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            discount={product.discount}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
