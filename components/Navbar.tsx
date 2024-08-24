"use client";

import { MouseEvent, useState } from "react";
import Button from "./reusable/Button";
import Image from "next/image";
import useStore from "@/zustand/NavigationBar";
import ActiveText from "./reusable/ActiveText";
import { NavigationText } from "@/constant/helper";

import Link from "next/link";
import { navigationMenu } from "@/constant/route";

const Navbar = () => {
	const [viewing] = useStore((state) => [state.viewing]);

	const [isOpen, setIsOpen] = useState(false);

	const handleBurgerMenu = (): void => {
		setIsOpen((previous) => !previous);
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
					src="/no_copyright_infrigement.svg"
					alt="This image is a logo image from internet"
					width={70}
					height={70}
					style={{ objectFit: "cover" }}
					className={`${isOpen ? "w-32" : "w-16"} h-auto`}
				/>
			</Link>
			<ul
				className={`gap-4 md:flex ${
					isOpen ? "flex items-center text-sm flex-col my-8" : "hidden"
				}`}>
				{navigationMenu.map((value) => {
					const active = viewing === value.text;
					return (
						<li key={value.url}>
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
				{/* <li>
					<Link
						href="#skills"
						as="#skills"
						onClick={() => handleStateNav(NavigationText.Skills)}>
						<ActiveText
							isActive={viewing === NavigationText.Skills}
							leftText="Ski"
							rightText="lls"
							textSize="text-sm font-bold"
						/>
					</Link>
				</li>
				<li>
					<Link
						href="#portfolio"
						as="#portfolio"
						onClick={() => handleStateNav(NavigationText.Portfolio)}>
						<ActiveText
							isActive={viewing === NavigationText.Portfolio}
							leftText="Port"
							rightText="folio"
							textSize="text-sm font-bold"
						/>
					</Link>
				</li>
				<li>
					<Link
						href="#contact"
						as="#contact"
						onClick={() => handleStateNav(NavigationText.Contact)}>
						<ActiveText
							isActive={viewing === NavigationText.Contact}
							leftText="Con"
							rightText="tact"
							textSize="text-sm font-bold"
						/>
					</Link>
				</li> */}
			</ul>
			<a href="/se-cv.pdf" download="se-cv.pdf">
				<Button text="Download CV" />
			</a>
		</nav>
	);
};

export default Navbar;
