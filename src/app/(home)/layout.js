import "./../globals.css";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="{`${inter.variable} font-sans`} xl:max-w-7xl 2xl:max-w-7xl mx-auto">
        {children}
      </div>
      <footer className="bg-primary-900 px-16">
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
      </footer>
    </div>
  );
}
