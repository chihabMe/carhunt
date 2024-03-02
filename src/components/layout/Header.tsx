"use client";
import React, { Fragment, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BanknotesIcon,
  Bars3Icon as MenuIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const navLinks = [
  { href: "/", text: "rentals cars", Icon: BanknotesIcon },
  { href: "/", text: "favorite cars", Icon: HeartIcon },
  { href: "/about", text: "about", Icon: BanknotesIcon },
  { href: "/contact", text: "contact us", Icon: BanknotesIcon },
];
const mobileNavLinks = [
  ...navLinks,
  {
    href: "/search?model=" + encodeURIComponent(" "),
    text: "search",
    Icon: MagnifyingGlassIcon,
  },
];
const Header = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="w-full  flex items-center py-4 border-b-2 border-gray-100 justify-between px-4">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPinIcon className="w-5 h-5" />
          <h1 className="font-semibold text-xs">
            USA,IL Chicago
          </h1>
        </div>
        <div className="flex items-center gap-2 text-gray-600  ">
          <PhoneIcon className="w-5 h-5" />
          <h1 className="font-semibold text-xs">
            (+1) 40 89 09 68 48
          </h1>
        </div>
      </div>
      <header className="flex items-center justify-between relative gap-2 px-4 py-4">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={150}
              height={22.5}
              alt="car logo"
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 font-semibold text-title">
          <ul className="flex gap-8 font-semibold text-title">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-primary capitalize text-gray-800 cursor-pointer text-xs md:text-base"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden     bg-blue w-56 text-right">
          <Menu as="div" className=" inline-block text-left">
            <div>
              <Menu.Button className="text-white focus:outline-none fixed top-14 right-4  z-30">
                {({ open }) => (
                  <>
                    {open
                      ? <XMarkIcon className="w-8 h-8 text-title" />
                      : <MenuIcon className="w-8 h-8 text-title" />}
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
                    <Button
                      onClick={() => router.push("/accounts/signin")}
                      size="lg"
                      className="!bg-green-200"
                    >
                      Sign in
                    </Button>
                  </Menu.Item>
                  {mobileNavLinks.map((item, idx) => (
                    <Menu.Item key={idx + item.href}>
                      <Link href={item.href}>
                        <div className="hover:text-primary px-2   flex gap-4 items-center hover:bg-gray-50 py-4 capitalize  text-title  cursor-pointer text-lg  md:text-base">
                          <div className="bg-gray-100 p-2 rounded-full">
                            {<item.Icon className="w-6 h-6  " />}
                          </div>

                          <span>
                            {item.text}
                          </span>
                        </div>
                      </Link>
                    </Menu.Item>
                  ))}
                </ul>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden md:block">
          <Button className=" !px-10  !font-bold !py-2.5 text-xs md:!px-6 md:!py-3">
            Sign in
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
