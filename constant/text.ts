import { ProjectProps } from "./helper";

export type CardType = {
	imageUrl: string;
	label: string;
	alt: string;
};

export const cardText: CardType[] = [
	{
		imageUrl: "/tanjiro.jpg",
		label: "Demon Slayer: Kimetsu no Yaiba",
		alt: "Tanjiro image",
	},
	{
		imageUrl: "/rimuru.jpg",
		label: "That Time I Got Reincarnated as a Slime",
		alt: "Rimuru tempest image",
	},
	{
		imageUrl: "/kafka.jpg",
		label: "Kaiju No. 8",
		alt: "Kafka Hibino",
	},
];

export const imagesRoute: string[] = [
	"/1.svg",
	"/2.svg",
	"/3.svg",
	"/4.svg",
	"/5.svg",
	"/6.svg",
	"/7.svg",
	"/8.svg",
	"/9.svg",
	"/10.svg",
	"/11.svg",
	"/12.svg",
	"/13.svg",
	"/14.svg",
	"/15.svg",
	"/16.svg",
];

export const recentProjects: ProjectProps[] = [
	{
		title: "Personal Portfolio",
		alt: "Image of my personal portfolio",
		image: "/project-one.png",
		description: "Typescript, React, NextJS, Tailwind, Zustand, EmailJS",
		duration: "July 7, 2023",
		github_url: "https://github.com/usernameNiD4niel/My-Portfolio.git",
		live_url: "https://my-portfolio-xi-tan-89.vercel.app",
	},
	{
		title: "Landing Page",
		alt: "Image of my landing page",
		image: "/project-two.png",
		description: "Typescript, React, NextJS, Tailwind",
		duration: "June 3, 2023",
		github_url: "https://github.com/usernameNiD4niel/LandingPageWebsite.git",
		live_url: "https://landing-page-website-nextjs.vercel.app/",
	},
	{
		title: "ITrust Application",
		alt: "Image of my maternal health application",
		image: "/project-four.png",
		description:
			"This is just a sample description for my project one. Please do not angry at me😂",
		duration: "May 22, 2023",
		github_url: "https://github.com/usernameNiD4niel/ItrustApp.git",
		live_url:
			"https://github.com/usernameNiD4niel/ItrustApp/blob/main/app/src/main/res/drawable/itrust_qr.png",
	},
	{
		title: "Business Calculator App",
		alt: "Image of my business calculator app",
		image: "/project-calcu.png",
		description: "Java, XML, SQLite",
		duration: "March 27, 2022",
		github_url: "https://github.com/usernameNiD4niel/BusinessCalculator.git",
		live_url:
			"https://github.com/usernameNiD4niel/BusinessCalculator/blob/main/app/src/main/res/drawable/frame.png",
	},
];

type LinksProps = {
	text: string;
	route: string;
};

export const usefulLinks: LinksProps[] = [
	{ text: "Home", route: "/" },
	{ text: "About", route: "/about" },
	{ text: "Skills", route: "/skills" },
	{ text: "Portfolio", route: "/portfolio" },
	{ text: "Contact", route: "/contact" },
];
export const socialMedia: LinksProps[] = [
	{ text: "Github", route: "/" },
	{ text: "Linkedin", route: "/" },
	{ text: "Facebook", route: "/" },
	{ text: "Twitter", route: "/" },
	{ text: "Leetcode", route: "/" },
];
