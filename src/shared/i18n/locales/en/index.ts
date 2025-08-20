import filter from './filter.json'
import notFound from './not-found.json'

export const en = {
	translation: {
		common: {
			title: 'Filter Application',
			loading: 'Loading...',
			error: 'Error',
			close: '✕',
			apply: 'Apply',
			cancel: 'Cancel',
			language: 'Language',
			openFilters: 'Open Filters'
		},
		confirmationModal: {
			close: '✕',
			applyFilterTitle: 'Do you want to apply new filter',
			cancel: 'Cancel',
			apply: 'Apply'
		},
		filter: filter
	},
	'not-found': notFound
} as const
