import { ButtonProps } from "@/constant/helper";

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-b from-[#21939C] to-[#EE5938] px-4 py-3 rounded-2xl text-sm hover:opacity-80"
    >
      {text}
    </button>
  );
};

export default Button;
