"use client";
import React, { Fragment, useState } from "react";
import Button from "../ui/Button";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon as MenuIcon,HeartIcon,MagnifyingGlassIcon,BanknotesIcon } from "@heroicons/react/24/outline";

const navLinks =[
  { href: "/", text: "rentals cars",Icon:BanknotesIcon },
  { href: "/", text: "favorite cars",Icon:HeartIcon },
  
] 
const mobileNavLinks = [
  ...navLinks,
  { href: "/search", text: "search",Icon:MagnifyingGlassIcon },
];
const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between relative gap-2 px-4 py-4">
        <div>
          <Link href="/">
            <Image src="/logo.svg" width={150} height={50} alt="car logo" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 font-semibold text-title">
          <ul className="flex gap-8 font-semibold text-title">
            {navLinks.map((item,idx) => (
              <li key={idx} className="hover:text-primary cursor-pointer text-xs md:text-base">
                {item.text}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden     bg-blue w-56 text-right">
          <Menu as="div" className=" inline-block text-left">
            <div>
              <Menu.Button className="text-white focus:outline-none fixed top-1 right-3  z-30">
                {({ open }) => (
                  <>
                    {open ? (
                      <XMarkIcon className="w-8 h-8 text-title" />
                    ) : (
                      <MenuIcon className="w-8 h-8 text-title" />
                    )}
                  </>
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transition opacity-0 scale-95"
              enterTo="transition opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" bg-light-bg dark:bg-dark-bg px-4 z-10 fixed left-0 right-0 bottom-0 top-0 ">
                <ul className="px-2 py-1 mt-12    flex flex-col     ">
                  <Menu.Item as="li">
                    <Button className="w-full py-3 my-2">Sign in</Button>
                  </Menu.Item>
                  {mobileNavLinks.map((item) => (
                    <Menu.Item>
                      <li className="hover:text-primary px-2   flex gap-4 items-center hover:bg-gray-50 py-4 capitalize  text-title  cursor-pointer text-lg  md:text-base">
                      <div className="bg-gray-100 p-2 rounded-full">
                      {<item.Icon className="w-6 h-6  "  /> }
                      </div>
                      
                      <span>
                        {item.text}
                      </span>
                      </li>
                    </Menu.Item>
                  ))}
                </ul>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden md:block">
          <Button className="!px-3 !font-bold !py-1 text-xs md:!px-6 md:!py-3">
            Sign in
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
