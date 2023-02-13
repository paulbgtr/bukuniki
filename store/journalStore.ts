import { create } from "zustand";

const useJournalStore = create((set) => ({
  journals: [],
}));
