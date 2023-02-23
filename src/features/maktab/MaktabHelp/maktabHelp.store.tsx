import { create } from "zustand";
interface BearState {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export const useMaktabHelpStore = create<BearState>()((set) => ({
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
