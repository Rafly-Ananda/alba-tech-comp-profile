import { create } from "zustand";

interface mobileNavbarState {
  isNavOpen: boolean;
  setNavState: (state: boolean) => void;
}

const useNavbarStore = create<mobileNavbarState>()((set) => ({
  isNavOpen: false,
  setNavState: (state) => set(() => ({ isNavOpen: state })),
}));

export default useNavbarStore;
