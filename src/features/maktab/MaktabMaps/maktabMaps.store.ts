import { create } from "zustand";
interface MaktabMapsState {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export const useMaktabMapsStore = create<MaktabMapsState>()((set) => ({
  isModalVisible: false,
  hideModal: () =>
    set(() => ({
      isModalVisible: false,
    })),
  showModal: () =>
    set(() => ({
      isModalVisible: true,
    })),
}));
