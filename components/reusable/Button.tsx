import { ButtonProps } from "@/constant/helper";

const Button = ({
	text,
	onClick,
	isFullWidth,
	className,
	from = "from-[#21939C]",
	to = "to-[#EE5938]",
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`bg-gradient-to-l font-semibold px-4 py-3 rounded-4xl text-sm hover:opacity-80 ${to} ${from} ${
				isFullWidth && "w-full"
			} ${className}`}>
			{text}
		</button>
	);
};

export default Button;
