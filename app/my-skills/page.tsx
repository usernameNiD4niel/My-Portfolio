import ActiveText from "@/components/reusable/ActiveText";
import TabActivator from "@/components/reusable/TabActivator";
import { NavigationText } from "@/constant/helper";
import { imagesRoute } from "@/constant/text";
import Image from "next/image";
import React from "react";

const MySkills = () => {
	return (
		<section className="my-20 h-[80vh] flex flex-col items-center w-full md:max-w-4xl sm:flex-row justify-center md:justify-between md:h-[70vh]">
			<TabActivator viewing={NavigationText.Skills} />
			<div className="flex flex-col items-center justify-center sm:items-start">
				<p className="text-center bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
					MY SKILLS
				</p>
				<h2 className="text-center text-2xl font-bold sm:text-start sm:text-3xl md:text-4xl">
					What Are My{" "}
					<ActiveText
						isActive={true}
						leftText="Programming"
						rightText=" Skills"
						textSize="2xl"
					/>{" "}
					Included?
				</h2>
				<p className="text-center text-sm sm:text-start sm:max-w-md">
					I develop simple, intuitive and responsive user interface that helps
					users get things done with less effort and time with these
					technologies.
				</p>
			</div>
			<div className="grid grid-cols-4 gap-4 mt-5">
				{imagesRoute.map((value, index) => (
					<DisplaySkills url={value} key={index} />
				))}
			</div>
		</section>
	);
};

const DisplaySkills = ({ url }: { url: string }): JSX.Element => {
	return (
		<div className="p-2 rounded-lg bg-[#383E45] cursor-pointer hover:opacity-80">
			<Image
				src={url}
				alt="Programming tools I use"
				width={100}
				height={100}
				className="w-12 h-12"
			/>
		</div>
	);
};

export default MySkills;
