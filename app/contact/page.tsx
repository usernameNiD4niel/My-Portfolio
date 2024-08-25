import { NavigationText } from "@/constant/helper";
import Image from "next/image";
import React, { FC } from "react";
import TabActivator from "@/components/reusable/TabActivator";
import DisplayForm from "@/components/contact/display-form";

type Props = {
	searchParams?: { [key: string]: string | string[] | undefined };
};

const Contact: FC<Props> = ({ searchParams }) => {
	const message = searchParams?.message;
	const subject = searchParams?.subject;

	return (
		<section className="flex justify-center my-20 bg-primary px-4 py-9">
			<TabActivator viewing={NavigationText.Contact} />
			<div className="flex items-center md:p-9 justify-center py-9 pe-0 w-full bg-secondary rounded-md md:max-w-4xl">
				<div className="flex flex-col justify-center relative">
					<p className="bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
						CONTACT
					</p>
					<p className="text-2xl font-bold md:text-3xl">
						Let&#39;s Make Your <span className="text-[#EE5938]">Idea</span>{" "}
						Into <span className="text-[#21939C]">Real</span>
					</p>
					<DisplayForm message={message} subject={subject} />
				</div>
				<div className="hidden sm:block">
					<Image
						src="/telephone.png"
						alt="Telephone picture"
						width={450}
						height={450}
						className="w-60 h-auto md:w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
