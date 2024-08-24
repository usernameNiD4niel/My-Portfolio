import TabActivator from "@/components/reusable/TabActivator";
import { NavigationText } from "@/constant/helper";
import React from "react";

const Blog = () => {
	return (
		<div className="w-full flex items-center justify-center h-[80vh]">
			<TabActivator viewing={NavigationText.Blog} />
			<p>Comig soon!</p>
		</div>
	);
};

export default Blog;
