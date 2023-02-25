import { create } from "zustand";
interface AdminMaktabState {
  selectedMaktabId: string;
  showFormModal: (maktabId: string) => void;
  hideFormModal: () => void;
}

export const useAdminMaktabStore = create<AdminMaktabState>()((set) => ({
  selectedMaktabId: "",
  hideFormModal: () =>
    set(() => ({
      selectedMaktabId: "",
    })),
  showFormModal: (id) =>
    set(() => ({
      selectedMaktabId: id,
    })),
}));
