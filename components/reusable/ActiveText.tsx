import { ActiveTextProps } from "@/constant/helper";

const ActiveText = ({
	isActive,
	rightText,
	leftText,
	textSize,
}: ActiveTextProps) => {
	if (isActive) {
		return (
			<p className={`text-[#EE5938] font-bold ${textSize}`}>
				<span>{leftText}</span>
				<span className="text-[#21939C]">{rightText}</span>
			</p>
		);
	}
	return (
		<p className={textSize}>
			{leftText}
			{rightText}
		</p>
	);
};

export default ActiveText;
