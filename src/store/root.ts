import { create } from 'zustand';
import { PageWindow } from '../types/PageWindow';

type RootStore = {
    activeWindows: Record<PageWindow, boolean>,
    updateActiveWindow: (id: PageWindow, isActive: boolean) => void
}

const initialWindowsState = Object.fromEntries(Object.values(PageWindow).map((key) => [key, false])) as Record<PageWindow, boolean>;

export const useStore = create<RootStore>((set) => ({
    activeWindows: initialWindowsState,
    updateActiveWindow: (id, isActive) => set((state) => ({
        activeWindows: { ...state.activeWindows, [`${id}`]: isActive },
    })),
}))