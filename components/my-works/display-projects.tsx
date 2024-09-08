import { ProjectProps } from "@/constant/helper";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Button from "../reusable/Button";

const DisplayProjects: FC<ProjectProps> = ({
	alt,
	description,
	duration,
	github_url,
	image,
	live_url,
	title,
}) => {
	return (
		<div className="relative group px-4 md:px-0">
			<Image
				src={image}
				alt={alt}
				width={500}
				height={600}
				className="w-full transition-opacity ease-in-out duration-300 h-auto md:mt-0 md:w-[380px] md:group-hover:opacity-30"
			/>
			<div className="flex flex-col gap-2 justify-center my-4 md:hidden md:group-hover:flex md:absolute md:group-hover:inset-0 md:px-3">
				<div className="flex items-center justify-between">
					<Link href="/">
						<h3 className="text-2xl font-bold">{title}</h3>
					</Link>
					<div className="flex gap-2 justify-end items-center">
						<Link
							href={github_url!}
							className="bg-slate-50 rounded-[50%]"
							as={github_url!}
							target="_blank">
							<Image
								src="/github-icon.svg"
								alt="Github Icon"
								width={30}
								height={30}
								className="w-8 h-auto"
							/>
						</Link>
						<Link
							href={live_url!}
							className="bg-slate-50 rounded-[50%]"
							as={live_url!}
							target="_blank">
							<Image
								src="/link.svg"
								alt="Link Icon"
								width={30}
								height={30}
								className="w-8 h-auto"
							/>
						</Link>
					</div>
				</div>
				<p className="text-sm font-thin">Finished on: {duration}</p>
				<p className="text-start">Tech Stack: {description}</p>
				<Button
					text="Read More"
					className="font-bold w-fit mt-5"
					key="Read More"
					isFullWidth={false}
				/>
			</div>
		</div>
	);
};

export default DisplayProjects;
