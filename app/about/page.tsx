import ActiveText from "@/components/reusable/ActiveText";
import TabActivator from "@/components/reusable/TabActivator";
import { NavigationText } from "@/constant/helper";
import Image from "next/image";
import Link from "next/link";
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
						className="w-[200px] h-[200px] rounded-[50%] absolute md:w-[250px] md:h-auto -bottom-1 -left-1"
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
						{/* Hi I&apos;m Daniel I have created various Web Apps and Android Apps
						when developing these I have implemented complex algorithm and scale
						the product according to the clients need. Additionally I have
						integrated an API to both web and mobile app which helps me to
						understand the underlying conflict. With almost 2 years of
						experience in developing complex application I have been exposed to
						many problems so I can guaranteed that I will fulfill my job if you
						hire me as a developer.  */}
						Hello, I&apos;m Daniel. I am a professional software engineer with
						experience in developing various web and Android applications. I
						have a strong background in scaling products to meet client needs
						and integrating APIs into both web and mobile platforms, which has
						helped me gain a solid understanding of common challenges in
						development. With years of experience in building robust
						applications, I have successfully navigated a range of technical
						issues. I am confident that my skills and commitment would make me a
						valuable asset to your team.
					</p>
					<Link
						className="bg-gradient-to-l font-semibold py-[0.85rem] w-full rounded-4xl text-sm hover:opacity-80 to-[#EE5938] from-[#21939C] sm:w-36 text-center"
						href={
							"/contact?subject=I have a Work for you&message=Daniel, I have a work for you. This is a fulltime remote work, here's the details of the work. (Add the details here...)"
						}>
						Hire Me
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
