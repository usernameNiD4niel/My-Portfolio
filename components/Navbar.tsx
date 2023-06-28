"use client";

import { MouseEvent, useState } from "react";
import Button from "./reusable/Button";
import Image from "next/image";
import useStore from "@/zustand/NavigationBar";
import Link from "next/link";
import ActiveText from "./reusable/ActiveText";
import { NavigationText } from "@/constant/helper";

const Navbar = () => {
  const [viewing] = useStore((state) => [state.viewing]);
  const [isOpen, setIsOpen] = useState(false);

  const handleHireMe = (event: MouseEvent) => {
    console.log("test");
  };

  const handleBurgerMenu = (event: MouseEvent): void => {
    const eventTarget: any = event.target;

    if (eventTarget.className === "burger-menu") {
      setIsOpen((previous) => !previous);
      return;
    }

    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`w-full filter px-3 py-4 z-50 fixed top-0 left-0 flex items-center transition-all duration-300 ease-in-out ${
        isOpen
          ? "inset-0 flex-col justify-start bg-[#212529]"
          : "justify-between bg-gradient-to-r from-[#212529]"
      }`}
      onClick={(event) => handleBurgerMenu(event)}
    >
      <div
        className={`${
          isOpen && "w-full flex items-center justify-end relative"
        }`}
      >
        <div className={`${isOpen ? "animate-burger" : "burger-menu"}`} />
      </div>
      <Link href="/" as="/" className={`${isOpen && "mt-20"} inline-block`}>
        <Image
          src="/no_copyright_infrigement.svg"
          alt="This image is a logo image from internet"
          width={70}
          height={70}
          style={{ objectFit: "cover" }}
          className={`${isOpen ? "w-32" : "w-16"} h-auto`}
        />
      </Link>
      <ul
        className={`gap-4 ${
          isOpen ? "flex items-center text-sm flex-col my-8" : "hidden"
        }`}
      >
        <li>
          <Link href="/" as="/">
            <ActiveText
              isActive={viewing === NavigationText.home}
              leftText="Ho"
              rightText="me"
              textSize="text-lg"
            />
          </Link>
        </li>
        <li>
          <Link href="/skills" as="/skills">
            <ActiveText
              isActive={viewing === NavigationText.skills}
              leftText="Ski"
              rightText="lls"
              textSize="text-lg"
            />
          </Link>
        </li>
        <li>
          <Link href="/portfolio" as="/portfolio">
            <ActiveText
              isActive={viewing === NavigationText.portfolio}
              leftText="Port"
              rightText="folio"
              textSize="text-lg"
            />
          </Link>
        </li>
        <li>
          <Link href="/contact" as="/contact">
            <ActiveText
              isActive={viewing === NavigationText.contact}
              leftText="Con"
              rightText="tact"
              textSize="text-lg"
            />
          </Link>
        </li>
      </ul>
      <Button onClick={handleHireMe} text="Download CV" />
    </nav>
  );
};

export default Navbar;
