import { create } from "zustand";
interface MaktabLiveState {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export const useMaktabLiveStore = create<MaktabLiveState>()((set) => ({
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
