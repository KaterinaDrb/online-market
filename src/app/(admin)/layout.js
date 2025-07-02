import "./../globals.css";
import Image from "next/image";
import Link from "next/link";

export default function AdminLayout({ children }) {
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
      <div>{children}</div>
    </div>
  );
}
