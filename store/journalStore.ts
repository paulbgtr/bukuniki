import { create } from "zustand";
import { Journal } from "../types/Journal";

type JournalState = {
  journals: Journal[];
  addJournals(journal: Journal): void;
};

const useJournalStore = create<JournalState>()((set) => ({
  journals: [],
  addJournals: (journal: Journal) =>
    set((state) => ({ journals: [...state.journals, journal] })),
}));
