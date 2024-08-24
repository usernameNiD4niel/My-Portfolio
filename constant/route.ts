import { NavigationMenu, NavigationText } from "./helper";

export const navigationMenu: NavigationMenu[] = [
	{
		leftText: "Ho",
		rightText: "me",
		text: NavigationText.Home,
		url: "/",
	},
	{
		leftText: "Abo",
		rightText: "ut",
		text: NavigationText.About,
		url: "/about",
	},
	{
		leftText: "Bl",
		rightText: "og",
		text: NavigationText.Blog,
		url: "/blog",
	},
	{
		leftText: "Con",
		rightText: "tact",
		text: NavigationText.Contact,
		url: "/contact",
	},
	{
		leftText: "Ski",
		rightText: "lls",
		text: NavigationText.Skills,
		url: "/my-skills",
	},
	{
		leftText: "Wor",
		rightText: "ks",
		text: NavigationText.Works,
		url: "/my-works",
	},
];
