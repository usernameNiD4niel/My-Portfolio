import HireMe from "@/components/about/hire-me";
import ActiveText from "@/components/reusable/ActiveText";
import TabActivator from "@/components/reusable/TabActivator";
import { NavigationText } from "@/constant/helper";
import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section className="w-full flex justify-center my-32">
			<TabActivator viewing={NavigationText.About} />
			<div className="flex flex-col items-center mx-5 w-full md:max-w-4xl sm:flex-row md:justify-between">
				<div className="relative flex items-center justify-center">
					<Image
						src="/daniel.svg"
						alt="Daniel Rey picture"
						width={220}
						height={220}
						className="w-[200px] h-[200px] rounded-[50%] absolute md:w-[250px] md:h-[250px] md:top-[2px]"
					/>
					<Image
						src="/opentowork.png"
						alt="Open to work image"
						width={220}
						height={220}
						className="w-[200px] h-[200px] rounded-[50%] z-10 sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px]"
					/>
				</div>
				<div className="flex items-center flex-col sm:max-w-sm md:max-w-lg sm:items-start sm:ml-5 md:ml-5">
					<p className="text-center bg-[#424141] rounded-2xl py-1 mt-3 px-4 text-xs w-fit">
						WHO I AM
					</p>
					<ActiveText
						isActive={true}
						leftText="About"
						rightText=" Me"
						textSize="text-2xl font-bold text-center md:text-4xl"
					/>
					<p className="text-justify my-4 font-light text-sm">
						Hi I&apos;m Daniel I have created various Web Apps and Android Apps
						when developing these I have implemented complex algorithm and scale
						the product according to the clients need. Additionally I have
						integrated an API to both web and mobile app which leads me to
						become a better developer and understand the underlying conflict.
						With almost 2 years of experience in developing complex application
						I have been exposed to many problems so I can guaranteed that I will
						fulfill my job if you hire me as a developer.
					</p>
					<HireMe />
				</div>
			</div>
		</section>
	);
};

export default About;
