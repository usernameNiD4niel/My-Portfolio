import DisplayProjects from "@/components/my-works/display-projects";
import ActiveText from "@/components/reusable/ActiveText";
import TabActivator from "@/components/reusable/TabActivator";
import { NavigationText } from "@/constant/helper";
import { recentProjects } from "@/constant/text";
import React from "react";

const MyWorks = () => {
	return (
		<section className="flex flex-col items-center my-20 mt-28 md:max-w-3xl">
			<TabActivator viewing={NavigationText.Works} />
			<div className="flex flex-col items-center">
				<p className="text-center bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
					MY WORKS
				</p>
				<ActiveText
					isActive={true}
					leftText="Featured"
					rightText=" Works"
					textSize="text-2xl font-bold text-center md:text-3xl md:mb-5"
				/>
			</div>
			<div className="relative flex items-center justify-center flex-col md:flex-row gap-3 mt-2 flex-wrap md:items-start md:gap-0">
				{recentProjects.map((value) => (
					<DisplayProjects
						title={value.title}
						description={value.description}
						duration={value.duration}
						image={value.image}
						key={value.image}
						alt={value.alt}
						github_url={value.github_url}
						live_url={value.live_url}
					/>
				))}
			</div>
		</section>
	);
};

export default MyWorks;
