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
		imageUrl: "/sung-jin-woo.webp",
		label: "Solo Leveling",
		alt: "Sung Jin Woo",
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
		image: "/project-one.jpg",
		description: "Typescript, React, NextJS, Tailwind, Zustand, EmailJS",
		duration: "July 7, 2023",
		github_url: "https://github.com/usernameNiD4niel/My-Portfolio.git",
		live_url: "/",
	},
	{
		title: "Landing Page",
		alt: "Image of my landing page",
		image: "/project-two.jpg",
		description: "Typescript, React, NextJS, Tailwind",
		duration: "June 3, 2023",
		github_url: "https://github.com/usernameNiD4niel/LandingPageWebsite.git",
		live_url: "https://landing-page-website-nextjs.vercel.app/",
	},
	{
		title: "ITrust Application",
		alt: "Image of my maternal health application",
		image: "/project-four.jpg",
		description: "Java, Material Library, Volley, Firebase, SQLite, and more.",
		duration: "May 22, 2023",
		github_url: "https://github.com/usernameNiD4niel/ItrustApp.git",
		live_url:
			"https://github.com/usernameNiD4niel/ItrustApp/blob/main/app/src/main/res/drawable/itrust_qr.jpg",
	},
	{
		title: "Business Calculator App",
		alt: "Image of my business calculator app",
		image: "/project-three.jpg",
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
	{ text: "Blog", route: "/blog" },
	{ text: "Contact", route: "/contact" },
	{ text: "Skills", route: "/my-skills" },
	{ text: "Works", route: "/my-works" },
];
export const socialMedia: LinksProps[] = [
	{ text: "Github", route: "https://github.com/usernameNiD4niel" },
	{
		text: "Linkedin",
		route: "https://www.linkedin.com/in/daniel-rey-340468206/",
	},
	{ text: "Facebook", route: "https://www.facebook.com/daniel.rey.9440/" },
	{ text: "Twitter", route: "https://x.com/rey__daniel__" },
	{ text: "Leetcode", route: "https://leetcode.com/u/daniel_rey/" },
];
