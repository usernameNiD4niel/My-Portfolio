import { NavigationText } from "@/constant/helper";
import { create } from "zustand";

type NavigationState = {
	viewing: NavigationText;
};

type ActionSate = {
	setViewing: (viewing: NavigationState["viewing"]) => void;
};

const useStore = create<NavigationState & ActionSate>((set) => ({
	viewing: NavigationText.Home,
	setViewing: (viewing) => set(() => ({ viewing: viewing })),
}));

export default useStore;
