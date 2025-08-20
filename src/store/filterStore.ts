import { create } from 'zustand'

import { FilterType } from '../shared/api/types/Filter/FilterType'
import { SearchRequestFilter } from '../shared/api/types/SearchRequest/SearchRequestFilter'

interface FilterStore {
	savedFilters: SearchRequestFilter[]
	draftFilters: SearchRequestFilter[]
	setDraftFilter: (id: string, options: string[]) => void
	applyDraftFilters: () => void
	resetDraftFilters: () => void
	clearDraftFilters: () => void
}

export const useFilterStore = create<FilterStore>((set, get) => ({
	savedFilters: [],
	draftFilters: [],

	setDraftFilter: (id, options) =>
		set(state => {
			if (options.length === 0) {
				return {
					draftFilters: state.draftFilters.filter(filter => filter.id !== id)
				}
			}

			const existing = state.draftFilters.find(filter => filter.id === id)
			if (existing) {
				return {
					draftFilters: state.draftFilters.map(filter =>
						filter.id === id ? { ...filter, optionsIds: options } : filter
					)
				}
			}

			return {
				draftFilters: [
					...state.draftFilters,
					{ id, type: FilterType.OPTION, optionsIds: options }
				]
			}
		}),

	applyDraftFilters: () => set({ savedFilters: get().draftFilters }),

	resetDraftFilters: () => set({ draftFilters: get().savedFilters }),

	clearDraftFilters: () => set({ draftFilters: [] })
}))
