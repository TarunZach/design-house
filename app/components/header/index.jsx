import "./index.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-transparent top-0 sticky w-full">
      <div className="container m-auto p-4">
        <div className="flex justify-between">
          <div className="nav-box rounded-3xl p-3 border-black border">
            <a
              href="#"
              className="home-link px-3 flex-row flex items-center gap-2"
            >
              <Image
                src="/svg/chevron-left.svg"
                width="25"
                height="25"
                alt="chev-left"
              />
              <p>Available for work</p>
              <Image
                src="/svg/chevron-right.svg"
                width="25"
                height="25"
                alt="chev-left"
              />
            </a>
          </div>
          <div className="nav-box flex rounded-3xl p-3 w-max absolute left-1/2 transform md:translate-x-1 lg:-translate-x-1/2 border-black border">
            <a href="#" className="nav-link px-3">
              DISCOVER
            </a>
            <a
              href="#"
              className="nav-link px-3 flex flex-row items-center gap-2"
            >
              <Image
                src="/svg/chevron-left.svg"
                width="20"
                height="20"
                alt="chev-left"
              />
              <p>WORK</p>
              <Image
                src="/svg/chevron-right.svg"
                width="20"
                height="20"
                alt="chev-left"
              />
            </a>
            <a href="#" className="nav-link px-3">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
