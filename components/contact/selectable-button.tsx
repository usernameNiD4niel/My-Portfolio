import React from "react";

const SelectableButton = ({
	text,
	isActive,
	addEvent,
}: {
	text: string;
	isActive: boolean;
	addEvent(subject: string): void;
}): JSX.Element => {
	return (
		<button
			type="button"
			value={text}
			onClick={() => addEvent(`I have a ${text}`)}
			name="subject"
			className={`border border-[#686A6C] rounded-lg text-sm font-light p-3 my-1 hover:opacity-80 ${
				isActive
					? "opacity-100 bg-gradient-to-l from-[#EE5938] to-[#21939C]"
					: "opacity-90"
			}`}>
			{text}
		</button>
	);
};

export default SelectableButton;
