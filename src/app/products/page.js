import ProductCard from "../../components/ProductCard";
import Image from "next/image";
import ProductList from "../../components/ProductList";

export default function Products() {
  return (
    <div className="mx-20">
      <div className="flex gap-10 h-32 px-2 py-4 justify-center items-center text-base font-light my-8">
        <div className="flex flex-col items-center gap-4">
          <Image src="/mobile.svg" alt="Logo" width={48} height={48} />{" "}
          <h1>Mobile</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/monitor.svg" alt="Logo" width={48} height={48} />
          <h1>Laptop</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/tablet.svg" alt="Logo" width={48} height={48} />
          <h1>Tablet</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/headphones.svg" alt="Logo" width={48} height={48} />
          <h1>Audio</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/watch-status.svg" alt="Logo" width={48} height={48} />
          <h1>Wearable</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/camera.svg" alt="Logo" width={48} height={48} />
          <h1>Camera</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/game.svg" alt="Logo" width={48} height={48} />
          <h1>Gaming</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/data.svg" alt="Logo" width={48} height={48} />
          <h1>Nerwork</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/devices.svg" alt="Logo" width={48} height={48} />
          <h1>Accessories</h1>
        </div>
      </div>

      <ProductList />

      <div className="flex my-12 justify-between">
        <div className="flex items-center gap-2 font-light">
          <Image
            src="/Tech.png"
            alt="Latest and Greatest Tech"
            width={30}
            height={30}
          ></Image>
          <h1>Latest and Greatest Tech</h1>
        </div>
        <div className="flex items-center gap-2 font-light">
          <Image
            src="/Guarantee.png"
            alt="Guarantee"
            width={30}
            height={30}
          ></Image>
          <h1>Guarantee</h1>
        </div>
        <div className="flex items-center gap-2 font-light">
          <Image
            src="/Shipping.png"
            alt="Free Shipping over 1000$"
            width={50}
            height={30}
          ></Image>
          <h1>Free Shipping over 1000$</h1>
        </div>
        <div className="flex items-center gap-2 font-light">
          <Image
            src="/Support.png"
            alt="24/7 Support"
            width={30}
            height={30}
          ></Image>
          <h1>24/7 Support</h1>
        </div>
      </div>
    </div>
  );
}
