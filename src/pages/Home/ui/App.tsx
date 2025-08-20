import { useTranslation } from 'react-i18next'

import { FilterModal } from '../../../components/FilterModal'
import { useFilterStore } from '../../../store/filterStore'
import { useModalStore } from '../../../store/modalStore'

export const App = () => {
	const { t } = useTranslation()
	const { isFilterOpen, openFilter } = useModalStore()
	const { savedFilters } = useFilterStore()

	return (
		<div className="p-8">
			<div className="mb-6">
				<h1 className="text-2xl font-bold">{t('common.title')}</h1>
			</div>

			<button
				onClick={openFilter}
				className="px-6 py-3 bg-blue-500 text-white rounded-lg"
			>
				{t('common.openFilters')}
			</button>

			<pre className="mt-4 p-4 bg-gray-100 rounded">
				{JSON.stringify(savedFilters, null, 2)}
			</pre>

			{isFilterOpen && <FilterModal />}
		</div>
	)
}
