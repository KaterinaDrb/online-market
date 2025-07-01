// src/pages/admin/index.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../components/ProductList";

const productIdsToShow = [1, 3, 5];

const AdminHome = () => {
  return (
    <div className="flex my-12 mx-20">
      <div className="bg-neutral-50 border-neutral-100">
        <div className="flex items-center py-0.5 px-3 gap-4 w-72">
          <Image
            src="/profile-circle.svg"
            alt="profile"
            width={60}
            height={60}
          />
          <h1 className="text-xl font-medium">Name Surname</h1>
        </div>

        <Link href="/pages">
          <div className="flex p-5 gap-4">
            <Image
              src="/user-edit.svg"
              alt="user-edit"
              width={24}
              height={24}
            />
            <p className="text-neutral-500 text-xl font-light">Pages</p>
          </div>
        </Link>

        <Link href="/logOut">
          <div className="flex p-5 gap-4">
            <Image src="/logout.svg" alt="logout" width={24} height={24} />
            <p className="text-red-errors text-xl font-light">Log out</p>
          </div>
        </Link>
      </div>

      <div className="mx-5 w-full">
        <h1 className="text-xl font-medium mb-2">Order History</h1>
        <p className="text-neutral-500 text-base font-light mb-10">
          Track, return or purchase items
        </p>

        <div className="flex gap-7 text-xl font-light text-neutral-500 relative my-4">
          <button className="flex items-center relative focus:outline-none focus:text-primary hover:text-primary group">
            Current
            <span className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-primary group-focus:scale-x-100 group-focus:bg-primary z-10" />
            <p className="mx-1 bg-neutral-100 rounded-full w-5 h-5 text-neutral-500 group-hover:bg-primary group-hover:text-white flex items-center justify-center">
              1
            </p>
          </button>

          <button className="flex items-center relative focus:outline-none focus:text-primary hover:text-primary group">
            Delivered
            <span className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-primary group-focus:scale-x-100 group-focus:bg-primary z-10" />
            <p className="mx-1 bg-neutral-100 rounded-full w-5 h-5 text-neutral-500 group-hover:bg-primary group-hover:text-white flex items-center justify-center">
              0
            </p>
          </button>

          <button className="flex items-center relative focus:outline-none focus:text-primary hover:text-primary group">
            Canceled
            <span className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-primary group-focus:scale-x-100 group-focus:bg-primary z-10" />
            <p className="mx-1 bg-neutral-100 rounded-full w-5 h-5 text-neutral-500 group-hover:bg-primary group-hover:text-white flex items-center justify-center">
              0
            </p>
          </button>

          <button className="flex items-center relative focus:outline-none focus:text-primary hover:text-primary group">
            Returned
            <span className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-primary group-focus:scale-x-100 group-focus:bg-primary z-10" />
            <p className="mx-1 bg-neutral-100 rounded-full w-5 h-5 text-neutral-500 group-hover:bg-primary group-hover:text-white flex items-center justify-center">
              0
            </p>
          </button>

          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-200 scale-x-100 z-0" />
        </div>

        <div className="grid grid-cols-5 items-center bg-neutral-50 text-base text-center">
          <div>
            <h2 className="font-medium px-2 py-4">order code</h2>
            <p className="font-light px-2 py-4">#8967856</p>
          </div>

          <div>
            <h2 className="font-medium px-2 py-4">Placed on</h2>
            <p className="font-light px-2 py-4">2023/08/20</p>
          </div>

          <div>
            <h2 className="font-medium px-2 py-4">Total</h2>
            <p className="font-light px-2 py-4">$543.02</p>
          </div>

          <div>
            <h2 className="font-medium px-2 py-4">Sent to</h2>
            <p className="font-light px-2 py-4">Jimmy Smith</p>
          </div>

          <h2 className="text-primary font-normal px-2 py-4">Order Status</h2>
        </div>

        <div className="flex flex-wrap gap-5 my-4">
          {productIdsToShow.map((id) => {
            const product = products.find((p) => p.id === id); // Находим продукт по ID
            return product ? (
              <div key={product.id} className="p-2 shadow-md">
                <Image src={product.image} alt="1" height={110} width={110} />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
