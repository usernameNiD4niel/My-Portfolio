import { ProjectProps } from "./helper";

export const cardText: any[] = [
    { imageUrl: "/android.png", experience: 1, label: "Android Experience", alt: "Android Icon" },
    { imageUrl: "/coding.png", experience: 2, label: "Web Experience", alt: "Web Icon" },
    { imageUrl: "/user-experience.png", experience: 1, label: "UI/UX Experience", alt: "UX Icon" }
]

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
    "/16.svg"
]

export const recentProjects: ProjectProps[] = [
    { title: "Personal Portfolio", alt: "Image of my personal portfolio", image: "/project-one.png", description: "This is just a sample description for my project one. Please do not angry at me😂", duration: "3 Days" },
    { title: "Landing Page", alt: "Image of my landing page", image: "/project-two.png", description: "This is just a sample description for my project two. Please do not angry at me😂", duration: "3 Days" },
    { title: "Business Calculator App", alt: "Image of my business calculator app", image: "/project-four.jpg", description: "This is just a sample description for my project one. Please do not angry at me😂", duration: "4 Days" },
    { title: "ITrust Application", alt: "Image of my maternal health application", image: "/project-three.jpg", description: "This is just a sample description for my project one. Please do not angry at me😂", duration: "6 - 8 Months" },
];

type LinksProps = {
    text: string,
    route: string
}

export const usefulLinks: LinksProps[] = [
    { text: "Home", route: "/" }, { text: "About", route: "/about" }, { text: "Skills", route: "/skills" }, { text: "Portfolio", route: "/portfolio" }, { text: "Contact", route: "/contact" }
];
export const socialMedia: LinksProps[] = [
    { text: "Github", route: "/" }, { text: "Linkedin", route: "/" }, { text: "Facebook", route: "/" }, { text: "Twitter", route: "/" }, { text: "Leetcode", route: "/" }
];
