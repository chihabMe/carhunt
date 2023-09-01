import React from "react";
import Button from "../ui/Button";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between gap-2 px-4 py-4">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"logo.svg"}
              width={150}
              height={50}
              alt="car logo"
            ></Image>
          </Link>
        </div>
        <nav className="">
          <ul className=" flex gap-8  font-semibold text-title  ">
            <li className="hover:text-primary cursor-pointer">Rental deals</li>
            <li className="hover:text-primary cursor-pointer">Favorite cars</li>
          </ul>
        </nav>
        <div>
          <Button className="!px-6 !py-3">sign in</Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
