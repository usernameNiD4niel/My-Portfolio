import ActiveText from "./reusable/ActiveText";

const Footer = () => {
  return (
    <>
      <div>
        <ActiveText
          isActive={true}
          leftText="Daniel"
          rightText="Rey"
          textSize="2xl"
          key="Daniel Rey"
        />
        <p className="text-lg font-semibold">
          Frontend Developer x Android Developer
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

export default Footer;
