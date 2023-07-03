import { socialMedia, usefulLinks } from "@/constant/text";
import ActiveText from "./reusable/ActiveText";
import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div>
        <ActiveText
          isActive={true}
          leftText="Daniel"
          rightText=" Rey"
          textSize="text-2xl text-center md:text-start"
          key="Daniel Rey"
        />
        <p className="text-lg font-semibold">
          Frontend Developer x Android Developer
        </p>
      </div>
      <div className="flex items-center flex-col">
        <h3 className="text-1xl font-bold">Useful Links</h3>
        <ul className="flex flex-col gap-y-1 items-center">
          {usefulLinks.map((value) => (
            <li key={value.route} className="font-light">
              <Link href={value.route} as={value.text}>
                {value.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-1xl font-bold">Social Media</h3>
        <ul className="flex flex-col gap-y-1 items-center">
          {socialMedia.map((value) => (
            <li key={value.text} className="font-light">
              <Link href={value.route} as={value.text}>
                {value.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start md:max-w-xs">
        <h3 className="text-1xl font-bold text-center">Newsletter</h3>
        <p className="text-center mx-4 md:text-start md:mx-0">
          Enter your email and get notified to be updated about the news
        </p>
        <form className="relative flex items-center justify-center w-fit my-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="py-4 pl-3 pr-12 text-sm font-thin border-transparent rounded-lg bg-[#212529] text-[#fff]"
          />
          <button type="submit" className="absolute right-2 mr-2">
            <BsFillSendFill className="text-[#21939C] text-lg" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Footer;
