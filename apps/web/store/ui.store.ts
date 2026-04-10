'use client';

import { create } from 'zustand';

interface UIState {
  isUpgradeModalOpen: boolean;
  isSidebarOpen: boolean;
  openUpgradeModal: () => void;
  closeUpgradeModal: () => void;
  toggleSidebar: () => void;
}

/**
 * Global UI state for modals and sidebar.
 * Not persisted — resets on page refresh intentionally.
 */
export const useUIStore = create<UIState>()((set) => ({
  isUpgradeModalOpen: false,
  isSidebarOpen: true,

  openUpgradeModal: () => set({ isUpgradeModalOpen: true }),
  closeUpgradeModal: () => set({ isUpgradeModalOpen: false }),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
