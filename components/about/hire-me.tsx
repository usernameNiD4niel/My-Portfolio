"use client";
import React from "react";
import Button from "../reusable/Button";

const HireMe = () => {
	return (
		<Button
			isFullWidth={true}
			text="Hire Me"
			key="hire-me"
			onClick={() => console.log()}
			className="sm:w-36"
		/>
	);
};

export default HireMe;
