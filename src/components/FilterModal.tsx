/* eslint-disable i18next/no-literal-string */
import { useFilterData } from '../hooks/useFilterData'
import { useFilterStore } from '../store/filterStore'

export const FilterModal = () => {
	const { data, isLoading, isError } = useFilterData()
	const { draftFilters, setDraftFilter, resetDraftFilters, clearDraftFilters } =
		useFilterStore()

	if (isLoading) {
		return <p>Loading...</p>
	}
	if (isError || !data) {
		return <p>Error</p>
	}

	const getSelected = (id: string) =>
		draftFilters.find(filter => filter.id === id)?.optionsIds || []

	const handleOptionChange = (
		filterId: string,
		optionId: string,
		checked: boolean
	) => {
		const selected = new Set<string>(getSelected(filterId))
		checked ? selected.add(optionId) : selected.delete(optionId)
		setDraftFilter(filterId, Array.from(selected))
	}

	return (
		<div className="absolute top-0 right-0 left-0 z-50 flex items-center justify-center backdrop-blur-md py-[80px]">
			<div className="relative w-full max-w-[1220px] bg-white rounded-2xl shadow-lg flex flex-col py-[32px] px-[34px]">
				{/* Header */}
				<div className="flex items-center border-b border-[#B4B4B4] pb-[25px]">
					<h2 className="text-4xl text-[#31393C] grow text-center">Filter</h2>
					<button
						className="self-center text-[#31393C] hover:text-gray-700 text-2xl"
						onClick={resetDraftFilters}
					>
						✕
					</button>
				</div>

				{/* Content */}
				<div className="flex-1 overflow-y-auto pt-5 space-y-8">
					{data.filterItems.map(filterItem => (
						<div
							key={filterItem.id}
							className="space-y-3 border-b border-[#B4B4B4] pb-[32px]"
						>
							<h3 className="text-2xl font-medium text-[#31393C] mb-[24px]">
								{filterItem.name}
							</h3>
							<div className="grid grid-cols-3 gap-2">
								{filterItem.options.map(option => (
									<label
										key={option.id}
										className="flex items-center space-x-2 text-base text-gray-700"
									>
										<input
											type="checkbox"
											checked={getSelected(filterItem.id).includes(option.id)}
											onChange={e =>
												handleOptionChange(
													filterItem.id,
													option.id,
													e.target.checked
												)
											}
											className="w-4 h-4 border-gray-300 rounded accent-orange-500"
										/>
										<span>{option.name}</span>
									</label>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Footer */}
				<div className="flex items-center justify-center p-4 space-x-4">
					<button
						onClick={clearDraftFilters}
						className="text-base underline text-[#078691] hover:text-gray-700"
					>
						Clear all parameters
					</button>
				</div>
			</div>
		</div>
	)
}
