/* eslint-disable i18next/no-literal-string */
import { FilterModal } from '../../../components/FilterModal'
import { useFilterStore } from '../../../store/filterStore'
import { useModalStore } from '../../../store/modalStore'

export const App = () => {
	const { isFilterOpen, openFilter } = useModalStore()
	const { savedFilters } = useFilterStore()

	return (
		<div className="p-8">
			<button
				onClick={openFilter}
				className="px-6 py-3 bg-blue-500 text-white rounded-lg"
			>
				Open Filters
			</button>

			<pre className="mt-4 p-4 bg-gray-100 rounded">
				{JSON.stringify(savedFilters, null, 2)}
			</pre>

			{isFilterOpen && <FilterModal />}
		</div>
	)
}
