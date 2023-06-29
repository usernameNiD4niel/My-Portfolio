import ActiveText from "@/components/reusable/ActiveText";
import { CardProps } from "@/constant/helper";
import { cardText, imagesRoute } from "@/constant/text";
import Image from "next/image";

type SkillsParams = {
  url: string;
};

const DisplaySkills = ({ url }: SkillsParams): JSX.Element => {
  return (
    <div className="p-2 rounded-lg bg-[#383E45]">
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
    <div className="flex items-center justify-between w-full mx-8 my-2 p-3 bg-[#323435] drop-shadow-xl rounded-xl">
      <Image
        src={imageUrl}
        alt={alt}
        width={30}
        height={30}
        className="w-10 h-auto opacity-80"
      />
      <div className="flex items-center flex-col">
        <h3 className="text-lg text-[#EE5938] font-bold">
          {experience}
          <span className="text-[#21939C]">+</span>
        </h3>
        <h3 className="text-sm font-bold">{label}</h3>
      </div>
      <Image
        src="/right-arrow.png"
        alt="right arrow icon"
        width={30}
        height={30}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default function Home() {
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

      <div className="flex flex-col items-center justify-center mt-20">
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

      <section className="my-20 flex flex-col items-center justify-center">
        <p className="text-center bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
          MY SKILLS
        </p>
        <h2 className="text-center text-2xl font-bold">
          What Are My{" "}
          <ActiveText
            isActive={true}
            leftText="Programming"
            rightText=" Skills"
            textSize="2xl"
          />{" "}
          Included?
        </h2>
        <p className="text-center text-sm">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {imagesRoute.map((value, index) => (
            <DisplaySkills url={value} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center my-20">
        <p className="text-center bg-[#424141] rounded-2xl py-1 px-4 text-xs w-fit">
          MY WORKS
        </p>
        <ActiveText
          isActive={true}
          leftText="Featured"
          rightText=" Works"
          textSize="text-2xl font-bold text-center"
        />
        <Image
          src="/project-one.png"
          alt="Screenshoot of my first project"
          width={220}
          height={220}
          className="w-full mx-5 my-2 h-auto"
        />
        <Image
          src="/project-two.png"
          alt="Screenshoot of my second project"
          width={220}
          height={220}
          className="w-full mx-5 my-2 h-auto"
        />
      </section>
    </main>
  );
}
