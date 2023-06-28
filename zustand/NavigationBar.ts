import { create } from "zustand"

type NavigationState = {
    viewing: string
}

type ActionSate = {
    setViewing: (viewing: NavigationState['viewing']) => void
}

const useStore = create<NavigationState & ActionSate>(set => ({
    viewing: 'home',
    setViewing: (viewing) => set(() => ({ viewing: viewing }))
}));

export default useStore;