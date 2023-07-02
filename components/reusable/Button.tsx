import { ButtonProps } from "@/constant/helper";

const Button = ({ text, onClick, isFullWidth, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-l from-[#21939C] to-[#EE5938] font-semibold px-4 py-3 rounded-4xl text-sm hover:opacity-80 ${
        isFullWidth && "w-full"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
