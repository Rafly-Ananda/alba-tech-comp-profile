import { create } from "zustand";

interface userState {
  userToken: string;
  setUserToken: (token: string) => void;
}

const useUserStore = create<userState>()((set) => ({
  userToken: "",
  setUserToken: (token) => set(() => ({ userToken: token })),
}));

export default useUserStore;
