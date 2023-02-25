import { create } from "zustand";
interface AdminMaktabListState {
  selected: { [key: string]: boolean };
  handleChecklist: (id: string[]) => void;

  page: number;
  loadMore: () => void;
  resetPage: () => void;

  query: string;
  setQuery: (q: string) => void;
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

    page: 1,
    loadMore: () =>
      set((state) => ({
        page: state.page + 1,
      })),
    resetPage: () =>
      set(() => ({
        page: 1,
      })),

    query: "",
    setQuery: (s) =>
      set(() => ({
        query: s,
      })),
  })
);
