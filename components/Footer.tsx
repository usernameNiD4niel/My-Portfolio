import { socialMedia, usefulLinks } from "@/constant/text";
import ActiveText from "./reusable/ActiveText";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<div className="flex flex-col  gap-y-6 bg-black py-5 md:flex-row md:justify-evenly w-full md:gap-x-32 md:py-20">
				<div className="w-full flex justify-between flex-col md:flex-row md:max-w-4xl gap-4 md:gap-0">
					<div>
						<ActiveText
							isActive={true}
							leftText="Daniel"
							rightText=" Rey"
							textSize="text-2xl text-center md:text-start"
							key="Daniel Rey"
						/>
						<p className="text-lg font-semibold text-center">
							Software Engineer
						</p>
					</div>
					<div className="flex items-center flex-col">
						<h3 className="text-1xl font-bold">Useful Links</h3>
						<ul className="flex flex-col gap-y-1 items-center">
							{usefulLinks.map((value) => (
								<li key={value.route} className="font-light">
									<Link href={value.route} as={value.route}>
										{value.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-1xl font-bold text-center">Social Media</h3>
						<ul className="flex flex-col gap-y-1 items-center">
							{socialMedia.map((value) => (
								<li key={value.text} className="font-light">
									<Link href={value.route} as={value.route} target="_blank">
										{value.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full bg-black py-4 bg-opacity-80 flex items-center justify-center">
				<p className="text-center">© Copyright 2024 - Daniel Rey</p>
			</div>
		</>
	);
};

export default Footer;
