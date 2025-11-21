import { create } from "zustand";

const useMacbookStore = create((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),

    scale: 0.1,
    setScale: (scale) => set({ scale }),

    reset: () => set({color: '#2e2c2e', scale: 0.1})
}))

export default useMacbookStore;