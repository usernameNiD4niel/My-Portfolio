import { MouseEvent } from "react";

export type ButtonProps = {
    text: string,
    onClick(event: MouseEvent): void,

};

export type ActiveTextProps = {
    isActive: boolean
    rightText: string
    leftText: string
    textSize: string
};

export enum NavigationText {
    home = "home",
    skills = "skills",
    portfolio = "portfolio",
    contact = "contact"
};

export type CardProps = {
    imageUrl: string
    experience: number
    label: string
    alt: string
};

export type ProjectProps = {
    title: string
    description: string
    image: string
    duration: string
    alt?: string
};