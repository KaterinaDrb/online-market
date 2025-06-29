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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <header className="relative flex p-4 bg-white text-black">
          <div className="flex items-center ml-10">
            <Image src="/logo.svg" alt="Logo" width={55} height={55} />
          </div>
          <div className="flex flex-grow text-center space-x-12 justify-center items-center">
            <Link href="/" className="hover:text-primary focus:outline-none">
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-primary focus:outline-none"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary focus:outline-none"
            >
              Blog
            </Link>
            <Link href="/faq" className="hover:text-primary focus:outline-none">
              FAQ
            </Link>
            <Link
              href="/contactus"
              className="hover:text-primary focus:outline-none"
            >
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
        <div className="{`${inter.variable} font-sans`} xl:max-w-7xl 2xl:max-w-7xl mx-auto">
          {children}
        </div>
        <div className="bg-primary-900 px-16">
          <div className="flex gap-28 bg-gradient-radial pt-14 pb-24 text-base font-light text-neutral-300">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-white">Company</h1>
              <Link href="/aboutUs" className="focus:outline-none">
                about us
              </Link>
              <Link href="/blog" className="focus:outline-none">
                blog
              </Link>
              <Link href="/returns" className="focus:outline-none">
                returns
              </Link>
              <Link href="/orderStatus" className="focus:outline-none">
                order status
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-white">Info</h1>
              <Link href="/howItWorks" className="focus:outline-none">
                How it works?
              </Link>
              <Link href="/promises" className="focus:outline-none">
                our promises
              </Link>
              <Link href="/faq" className="focus:outline-none">
                FAQ
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-white">Contact us</h1>
              <div className="flex gap-1">
                <Image
                  src="/location.png"
                  alt="location"
                  height={20}
                  width={20}
                />
                <p>123 Main Street, Anytown,USA</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/call-calling.png"
                  alt="call-calling"
                  height={20}
                  width={20}
                />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/sms-edit.png"
                  alt="sms-edit"
                  height={20}
                  width={20}
                />
                <p>TechHeimSupport@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between font-medium text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Image
                src="/copyright.png"
                alt="copyright"
                height={20}
                width={20}
              />
              <p>2023 Tech Heim.</p>
            </div>

            <div className="flex gap-8 py-4">
              <Link href="/cookie" className="focus:outline-none">
                cookie settings
              </Link>
              <Link href="/privacyPolicy" className="focus:outline-none">
                Privacy Policy
              </Link>
              <Link href="/terms" className="focus:outline-none">
                Terms and Conditions
              </Link>
              <Link href="/imprint" className="focus:outline-none">
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
