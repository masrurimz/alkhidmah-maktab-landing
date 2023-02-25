import type { maktab } from "@prisma/client";
import { create } from "zustand";
interface AdminMaktabPrintState {
  data: maktab[] | null;
  setPrintData: (data: maktab[] | null) => void;
}

export const useAdminMaktabPrintStore = create<AdminMaktabPrintState>()(
  (set) => ({
    data: null,
    setPrintData: (data) =>
      set(() => ({
        data,
      })),
  })
);
