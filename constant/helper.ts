import { MouseEvent } from "react";

export type ButtonProps = {
	text: string;
	type?: "button" | "reset" | "submit";
	disabled?: boolean;
	onClick?: (event: MouseEvent) => void;
	isFullWidth?: boolean;
	className?: string;
	from?: string;
	to?: string;
};

export type ActiveTextProps = {
	isActive: boolean;
	rightText: string;
	leftText: string;
	textSize: string;
};

export type NavigationMenu = {
	url: string;
	leftText: string;
	rightText: string;
	text: NavigationText;
};

export enum NavigationText {
	Home = "Home",
	Skills = "Skills",
	Portfolio = "Portfolio",
	Contact = "Contact",
	About = "About",
	Blog = "Blog",
	Works = "Works",
}

export type ProjectProps = {
	title: string;
	description: string;
	image: string;
	duration: string;
	alt: string;
	github_url: string | undefined;
	live_url: string | undefined;
};

export type ContactStateProps = {
	sender_name: string;
	message: string;
	email: string;
	subject: string;
};

export enum SelectableButtonParam {
	question = "I have a Question",
	feedback = "I have a Feedback",
	work_for_you = "I have a Work for you",
}
