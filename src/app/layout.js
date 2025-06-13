import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="relative flex p-4 bg-white text-black">
          <div className="flex items-center ml-10">
            <Image src="/logo.svg" alt="Logo" width={55} height={55} />
          </div>
          <div className="flex flex-grow text-center space-x-12 justify-center items-center">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-primary">
              FAQ
            </Link>
            <Link href="/contactus" className="hover:text-primary">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-2 mr-10">
            <Link href="/search">
              <Image src="/search.svg" alt="Search" width={24} height={24} />
            </Link>
            <Link href="/basket">
              <Image src="/basket.svg" alt="Basket" width={24} height={24} />
            </Link>
            <Link href="/account">
              <Image
                src="/person.svg"
                alt="Personal Account"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mt-2"></div>
        </header>
        <div className="{`${inter.variable} font-sans`}">{children}</div>
      </body>
    </html>
  );
}
