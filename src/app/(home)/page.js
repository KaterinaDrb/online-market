"use client";
import Image from "next/image";
import Button from "../../components/button";
import Input from "../../components/input";
import ShoppingCartIcon from "../../components/ShoppingCartIcon";
import UserIcon from "../../components/UserIcon";
import CloseCircleIcon from "../../components/CloseCircleIcon";

export default function Home() {
  return (
    <div className="mx-20">
      <div className="flex justify-between">
        <div className="mt-14">
          <h1 className="text-primary-700 text-6xl font-semibold mt-5">
            Tech Heim
          </h1>
          <h2 className="text-3xl font-medium mt-10">
            <span className="text-primary-700">&quot;Join the </span>
            <span className="text-secondary">digital revolution</span>
            <span className="text-primary-700">&quot;</span>
          </h2>

          <button className="bg-secondary text-white text-base font-light rounded-lg px-4 py-2 w-72 h-14 mt-28">
            Explore More
          </button>
        </div>
        <div className="ml-16">
          <Image src="/laptops.png" alt="Search" width={600} height={320} />
        </div>
      </div>
      <div className="flex items-center justify-center text-center font-light my-12 gap-5">
        <div className="w-44 h-48 flex flex-col justify-between items-center shadow-md py-2 px-5">
          <Image
            src="/accessories.png"
            alt="Accessories"
            width={148}
            height={148}
          />
          <p>Accessories</p>
        </div>
        <div className="w-44 h-48 flex flex-col justify-between items-center shadow-md py-2 px-5">
          <Image src="/camera.png" alt="Camera" width={148} height={148} />
          <p>Camera</p>
        </div>
        <div className="w-44 h-48 flex flex-col justify-between items-center shadow-md py-2 px-5">
          <Image src="/laptop.png" alt="Laptop" width={148} height={148} />
          <p>Laptop</p>
        </div>
        <div className="w-44 h-48 flex flex-col justify-between items-center shadow-md py-2 px-5">
          <Image
            src="/smart phone.png"
            alt="Smart Phone"
            width={148}
            height={148}
          />
          <p>Smart Phone</p>
        </div>
        <div className="w-44 h-48 flex flex-col justify-between items-center shadow-md py-2 px-5">
          <Image src="/gaming.png" alt="Gaming" width={148} height={148} />
          <p>Gaming</p>
        </div>
        <div className="w-44 h-48 flex flex-col justify-between items-center shadow-md py-2 px-5">
          <Image
            src="/smart watch.png"
            alt="Smart Watch"
            width={148}
            height={148}
          />
          <p>Smart Watch</p>
        </div>
      </div>
    </div>
  );
}
