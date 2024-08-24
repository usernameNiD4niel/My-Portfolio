"use client";
import { NavigationText } from "@/constant/helper";
import useStore from "@/zustand/NavigationBar";
import React, { FC, useEffect } from "react";

type Props = {
	viewing: NavigationText;
};

const TabActivator: FC<Props> = ({ viewing }) => {
	const [setViewing] = useStore((state) => [state.setViewing]);

	useEffect(() => {
		setViewing(viewing);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [viewing]);

	return <></>;
};

export default TabActivator;
