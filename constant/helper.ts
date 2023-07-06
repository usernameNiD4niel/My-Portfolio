import { MouseEvent } from "react";

export type ButtonProps = {
    text: string,
    onClick(event: MouseEvent): void,
    isFullWidth?: boolean,
    className?: string
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
    alt: string
    github_url: string | undefined
    live_url: string | undefined
};

export enum SelectableButtonParam {
    question = "I have a Question",
    feedback = "I have a Feedback",
    work_for_you = "I have a Work for you"
}