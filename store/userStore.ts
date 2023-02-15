import { create } from "zustand";

type UserState = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const useUserStore = create<UserState>()((set) => ({
  id: "",
  name: "",
  email: "",
  password: "",
}));
