import { create } from 'zustand'

interface ModalStore {
	isFilterOpen: boolean
	isConfirmOpen: boolean
	openFilter: () => void
	closeFilter: () => void
	openConfirm: () => void
	closeConfirm: () => void
}

export const useModalStore = create<ModalStore>(set => ({
	isFilterOpen: false,
	isConfirmOpen: false,
	openFilter: () => set({ isFilterOpen: true }),
	closeFilter: () => set({ isFilterOpen: false }),
	openConfirm: () => set({ isConfirmOpen: true }),
	closeConfirm: () => set({ isConfirmOpen: false })
}))
