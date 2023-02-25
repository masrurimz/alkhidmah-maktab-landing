import { create } from "zustand";
interface AdminMaktabListState {
  selected: { [key: string]: boolean };
  handleChecklist: (id: string[]) => void;
}

export const useAdminMaktabListStore = create<AdminMaktabListState>()(
  (set) => ({
    selected: {},
    handleChecklist: (ids) =>
      set((state) => {
        const nextSelected = {
          ...state.selected,
        };

        ids.forEach((id) => {
          nextSelected[id] = !nextSelected[id];
        });

        return {
          selected: nextSelected,
        };
      }),
  })
);
