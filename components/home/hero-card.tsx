import { cardText } from "@/constant/text";
import Image from "next/image";
import React from "react";

const HeroCard = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-20 w-full md:max-w-3xl gap-2 sm:flex-row">
			{cardText.map((value) => (
				<div
					className="w-full flex gap-4 p-4 rounded-md items-center bg-primary"
					key={value.imageUrl}>
					<Image
						src={value.imageUrl}
						alt={value.alt}
						width={300}
						height={300}
						className="w-auto h-12 rounded-md"
					/>
					<p className="text-sm">{value.label}</p>
				</div>
			))}

			{/* <div className="w-full flex gap-4 p-4 rounded-md items-center bg-gradient-to-tr from-[#8A59C3] to-[#32B3FF]">
				<Image
					src={"/rimuru.jpg"}
					alt={"An image of Rimuru Tempest from I got reincarnated as a slime"}
					width={300}
					height={300}
					className="w-auto h-12 rounded-md"
				/>
				<p className="text-sm">Rimuru Tempest</p>
			</div>

			<div className="w-full flex gap-4 p-4 rounded-md items-center bg-gradient-to-tr from-[#5A5C63] to-[#934B4A]">
				<Image
					src={"/sakuna.jpg"}
					alt={"An image of Yuji Itadori from Jujutsu Kaisen"}
					width={300}
					height={300}
					className="w-auto h-12 rounded-md"
				/>
				<p className="text-sm">Yuji Itadori</p>
			</div> */}
		</div>
	);
};

export default HeroCard;
