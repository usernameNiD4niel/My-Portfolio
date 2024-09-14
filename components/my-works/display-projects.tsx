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
				width={1100}
				height={700}
				className="w-full transition-opacity ease-in-out duration-300 h-auto md:mt-0 md:w-[420px] rounded-lg md:group-hover:opacity-30"
			/>
			<div className="flex flex-col gap-2 justify-center my-4 md:hidden md:group-hover:flex md:absolute md:group-hover:inset-0 md:px-4">
				<div className="flex items-center justify-between">
					<Link href="/">
						<h3 className="text-2xl font-bold">{title}</h3>
					</Link>
					<div className="flex gap-2 justify-end items-center">
						<Link
							href={github_url ?? "/"}
							as={github_url ?? "/"}
							target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-github w-5 h-5">
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
								<path d="M9 18c-4.51 2-5-2-7-2" />
							</svg>
						</Link>
						<Link href={live_url ?? "/"} as={live_url ?? "/"} target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-link w-6 h-6">
								<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
								<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
							</svg>
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
