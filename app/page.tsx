"use client";

import Contact from "@/components/Contact";
import ActiveText from "@/components/reusable/ActiveText";
import Button from "@/components/reusable/Button";
import "./globals.css";
import { CardProps, ProjectProps } from "@/constant/helper";
import { cardText, imagesRoute, recentProjects } from "@/constant/text";

import Image from "next/image";
import Link from "next/link";

type SkillsParams = {
  url: string;
};

const DisplayProject = ({
  alt,
  title,
  description,
  image,
  duration,
}: ProjectProps): JSX.Element => {
  return (
    <div className="relative group">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className="w-full transition-opacity ease-in-out duration-300 h-auto mt-10 md:mt-0 md:w-[380px] md:group-hover:opacity-30"
      />
      <div className="flex flex-col gap-2 my-4 md:hidden md:group-hover:flex md:absolute md:group-hover:inset-0 md:p-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h3 className="text-2xl font-bold">{title}</h3>
          </Link>
          <div className="flex gap-2 justify-end items-center">
            <Link href="/" className="bg-slate-50 rounded-[50%]">
              <Image
                src="/github-icon.svg"
                alt="Github Icon"
                width={30}
                height={30}
                className="w-10 h-auto"
              />
            </Link>
            <Link href="/" className="bg-slate-50 rounded-[50%]">
              <Image
                src="/link.svg"
                alt="Link Icon"
                width={30}
                height={30}
                className="w-10 h-auto"
              />
            </Link>
          </div>
        </div>
        <p className="text-sm font-thin">Duration: {duration}</p>
        <p className="text-justify">{description}</p>
        <Button
          onClick={() => {}}
          text="Read More"
          className="font-bold w-fit mt-5"
          key="Read More"
          isFullWidth={false}
        />
      </div>
    </div>
  );
};

const DisplaySkills = ({ url }: SkillsParams): JSX.Element => {
  return (
    <div className="p-2 rounded-lg bg-[#383E45] cursor-pointer hover:opacity-80">
      <Image
        src={url}
        alt="Programming tools I use"
        width={100}
        height={100}
        className="w-12 h-12"
      />
    </div>
  );
};

const HeroCard = ({
  imageUrl,
  experience,
  label,
  alt,
}: CardProps): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full mx-8 my-2 p-3 bg-[#323435] drop-shadow-xl sm:mx-2 rounded-xl md:p-5">
      <Image
        src={imageUrl}
        alt={alt}
        width={30}
        height={30}
        className="w-8 h-auto"
      />
      <div className="flex items-center flex-col sm:flex-row mx-3">
        <h3 className="text-lg text-[#EE5938] font-bold">
          {experience}
          <span className="text-[#21939C]">+</span>
        </h3>
        <h3 className="text-sm font-bold">{label}</h3>
      </div>
      <Image
        src="/right-arrow.png"
        alt="right arrow icon"
        width={25}
        height={25}
        className="w-5 h-auto"
      />
    </div>
  );
};

export default function Home() {
  const handleHireMe = () => {
    console.log("Connect to contact form");
  };

  return (
    <main className="my-28 mx-5 flex flex-col items-center justify-center">
      <Image
        src="/daniel.svg"
        alt="Daniel Rey picture"
        width={150}
        height={150}
        className="w-40 h-auto mt-10"
      />
      <h3 className="text-2xl font-bold flex text-center mt-5 items-center">
        Hi, I am
        <ActiveText
          isActive={true}
          leftText="Daniel"
          rightText=" Rey"
          textSize="text-2xl ml-1"
        />{" "}
        👋
      </h3>
      <h1 className="text-center text-3xl font-bold mt-2">Software Engineer</h1>
      <p className="text-center text-1xl mt-2">
        I design and code beautifully simple things, and I love what I do.
      </p>

      <div className="flex flex-col items-center justify-center mt-20 sm:flex-row">
        {cardText.map((value, index) => (
          <HeroCard
            alt={value.alt}
            experience={value.experience}
            imageUrl={value.imageUrl}
            label={value.label}
            key={index}
          />
        ))}
      </div>

      <section
        className="my-20 flex flex-col items-center justify-center sm:flex-row md:gap-8 md:h-[70vh]"
        id="skills"
      >
        <div className="flex flex-col items-center justify-center sm:items-start">
          <p className="text-center bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
            MY SKILLS
          </p>
          <h2 className="text-center text-2xl font-bold sm:text-start sm:text-3xl md:text-4xl">
            What Are My{" "}
            <ActiveText
              isActive={true}
              leftText="Programming"
              rightText=" Skills"
              textSize="2xl"
            />{" "}
            Included?
          </h2>
          <p className="text-center text-sm sm:text-start sm:max-w-md">
            I develop simple, intuitive and responsive user interface that helps
            users get things done with less effort and time with those
            technologies.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {imagesRoute.map((value, index) => (
            <DisplaySkills url={value} key={index} />
          ))}
        </div>
      </section>

      <section
        className="flex flex-col items-center my-20 md:max-w-3xl"
        id="portfolio"
      >
        <div className="flex flex-col items-center">
          <p className="text-center bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
            MY WORKS
          </p>
          <ActiveText
            isActive={true}
            leftText="Featured"
            rightText=" Works"
            textSize="text-2xl font-bold text-center md:text-3xl md:mb-5"
          />
        </div>
        <div className="relative flex items-center justify-center flex-col md:flex-row gap-3 flex-wrap md:items-start md:gap-0">
          {recentProjects.map((value) => (
            <DisplayProject
              title={value.title}
              description={value.description}
              duration={value.duration}
              image={value.image}
              key={value.image}
              alt={value.alt}
            />
          ))}
        </div>
      </section>

      <section
        className="flex flex-col items-center my-20 sm:flex-row md:justify-between lg:gap-20"
        id="about"
      >
        <div className="relative flex items-center justify-center">
          <Image
            src="/daniel.svg"
            alt="Daniel Rey picture"
            width={220}
            height={220}
            className="w-[200px] h-[200px] rounded-[50%] absolute md:w-[250px] md:h-[250px] md:top-[2px]"
          />
          <Image
            src="/opentowork.png"
            alt="Open to work image"
            width={220}
            height={220}
            className="w-[200px] h-[200px] rounded-[50%] z-10 sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px]"
          />
        </div>
        <div className="flex items-center flex-col sm:max-w-sm md:max-w-lg sm:items-start sm:ml-5 md:ml-5">
          <p className="text-center bg-[#424141] rounded-2xl py-1 mt-3 px-4 text-xs w-fit">
            WHO I AM
          </p>
          <ActiveText
            isActive={true}
            leftText="About"
            rightText=" Me"
            textSize="text-2xl font-bold text-center md:text-4xl"
          />
          <p className="text-justify my-4 font-light text-sm">
            Hi I’m Daniel have created various Web Apps and Android Apps when
            developing these I have implemented complex algorithm and scale the
            product according to the clients need. Additionally I have
            integrated an API to both web and mobile app which leads me to
            become a better developer and understand the underlying conflict.
            With almost 2 years of experience in developing complex application
            I have been exposed to many problems so I can guaranteed that I will
            fulfill my job if you hire me as a developer.
          </p>
          <Button
            isFullWidth={true}
            text="Hire Me"
            onClick={handleHireMe}
            key="hire-me"
            className="sm:w-36"
          />
        </div>
      </section>

      <Contact />
    </main>
  );
}
