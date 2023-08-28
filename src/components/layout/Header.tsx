import React from "react";
import Button from "../ui/Button";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between gap-2 px-4 py-4">
        <div>CarHunt</div>
        <nav className="">
          <ul className=" flex gap-4 ">
            <li>Rental deals</li>
            <li>Favorite cars</li>
          </ul>
        </nav>
        <div>
          <Button  className="!px-6">sign in</Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
