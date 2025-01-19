"use client";

import { useState } from "react";
import Button from "./reusable/Button";
import Image from "next/image";
import useStore from "@/zustand/NavigationBar";
import ActiveText from "./reusable/ActiveText";

import Link from "next/link";
import { navigationMenu } from "@/constant/route";

const Navbar = () => {
	const [viewing] = useStore((state) => [state.viewing]);

	const [isOpen, setIsOpen] = useState(false);

	const handleBurgerMenu = (): void => {
		setIsOpen((previous) => !previous);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<nav
			className={`w-full filter px-3 py-4 z-50 fixed top-0 left-0 flex items-center transition-opacity duration-300 ease-in-out md:px-32 ${
				isOpen
					? "inset-0 flex-col justify-start bg-primary opacity-[0.95]"
					: "justify-between bg-gradient-to-bl from-[#323435]"
			}`}>
			<div
				className={`flex items-center cursor-pointer md:hidden ${
					isOpen ? "absolute top-5 right-2" : "pt-3 pb-5 px-1 justify-center"
				}`}
				onClick={handleBurgerMenu}>
				<div className={`${isOpen ? "animate-burger" : "burger-menu"}`} />
			</div>
			<Link href="/" as="/" className={`${isOpen && "mt-20"} inline-block`}>
				<Image
					src="/logo.png"
					alt="This image is a logo image from internet"
					width={70}
					height={70}
					style={{ objectFit: "cover" }}
					className={`${isOpen ? "w-32" : "w-10"} h-auto`}
				/>
			</Link>
			<ul
				className={`gap-4 md:flex ${
					isOpen ? "flex items-center text-sm flex-col my-8" : "hidden"
				}`}>
				{navigationMenu.map((value) => {
					const active = viewing === value.text;
					return (
						<li key={value.url} onClick={onClose}>
							<Link href={value.url} as={value.url}>
								<ActiveText
									isActive={active}
									leftText={value.leftText}
									rightText={value.rightText}
									textSize={`text-sm ${active ? "font-bold" : "font-normal"}`}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
			<a href="/sd-rey-cv.pdf" download="Daniel Rey Resume.pdf">
				<Button text="Download CV" />
			</a>
		</nav>
	);
};

export default Navbar;
