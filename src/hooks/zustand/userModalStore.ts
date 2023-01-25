import { create } from "zustand";

interface modalState {
  isModalOpen: boolean;
  setModalState: (state: boolean) => void;
}

const useModalStore = create<modalState>()((set) => ({
  isModalOpen: false,
  setModalState: (state) => set(() => ({ isModalOpen: state })),
}));

export default useModalStore;
