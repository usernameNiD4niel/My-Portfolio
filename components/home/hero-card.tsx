import { cardText } from "@/constant/text";
import Image from "next/image";
import React from "react";

const HeroCard = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-20 w-full md:max-w-3xl gap-2 sm:flex-row">
			{cardText.map((value) => (
				<div
					className="w-full flex gap-4 p-4 rounded-md items-center bg-secondary"
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
		</div>
	);
};

export default HeroCard;
