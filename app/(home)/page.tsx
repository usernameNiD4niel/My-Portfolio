import HeroCard from "@/components/home/hero-card";
import ActiveText from "@/components/reusable/ActiveText";
import TabActivator from "@/components/reusable/TabActivator";
import FunctionPage from "@/constant/functions";
import { NavigationText } from "@/constant/helper";
import Image from "next/image";
import React from "react";

const HomePage = () => {
	return (
		<div className="my-28 mx-5 flex flex-col items-center justify-center">
			<TabActivator viewing={NavigationText.Home} />
			<Image
				src="/daniel.svg"
				alt="Daniel Rey picture"
				width={150}
				height={150}
				className="w-40 h-40 mt-10 drop-shadow-md rounded-full"
			/>
			<h3 className="text-2xl font-bold flex text-center mt-5 items-center">
				Hi, I am
				<ActiveText
					isActive={true}
					leftText="Daniel"
					rightText=" Rey"
					textSize="text-2xl ml-1"
				/>{" "}
				👋
			</h3>
			<h1 className="text-center text-3xl font-bold mt-2">Software Engineer</h1>
			<p className="text-center text-1xl mt-2">
				I love seeing technology changing the world we lived in.
			</p>

			{/* Make the card gradient */}
			<HeroCard />

			<FunctionPage />
		</div>
	);
};

export default HomePage;
