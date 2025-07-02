import Image from "next/image";
import Button from "../../../components/button";

export default function Contactus() {
  return (
    <div className="my-20 mx-32">
      <div className="flex text-xl font-light gap-32">
        <div className="flex flex-col gap-3 justify-center items-center">
          <Image
            src="/location-add.svg"
            alt="location"
            height={48}
            width={48}
          />
          <h2 className="font-medium">Office</h2>
          <p>123 Main Street, Anytown,USA</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <Image src="/sms.svg" alt="sms" height={48} width={48} />
          <h2 className="font-medium">Email</h2>
          <p>info@techheim.com</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <Image
            src="/call-incoming.svg"
            alt="call-incoming"
            height={48}
            width={48}
          />
          <h2 className="font-medium">Phone</h2>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="flex my-32 justify-between">
        <div>
          <h1 className="text-2xl font-medium mb-2">Message us</h1>
          <p className="text-xl font-light w-md text-justify">
            We&apos;re here to assist you every step of the way. Whether you
            have a question, need technical support, or simply want to share
            your feedback, our dedicated team is ready to listen and provide
            prompt assistance.
          </p>
        </div>
        <form className="text-base text-neutral-400 flex flex-col gap-2 w-96 items-end">
          <input
            type="text"
            placeholder="* Your name"
            className="py-4 px-2 focus:outline-none border-neutral-400 border-1 rounded-lg w-full"
          ></input>
          <input
            type="email"
            placeholder="* Email"
            className="py-4 px-2 focus:outline-none border-neutral-400 border-1 rounded-lg w-full"
          ></input>
          <textarea
            placeholder="Message"
            className="py-4 px-2 focus:outline-none border-neutral-400 border-1 rounded-lg w-full"
          ></textarea>
          <Button label="Submit"></Button>
        </form>
      </div>
    </div>
  );
}
