/* eslint-disable i18next/no-literal-string */
import { useFilterStore } from '../store/filterStore'
import { useModalStore } from '../store/modalStore'

export const ConfirmModal = () => {
	const { isConfirmOpen, closeConfirm, closeFilter } = useModalStore()
	const { applyDraftFilters, resetDraftFilters } = useFilterStore()

	if (!isConfirmOpen) {
		return null
	}

	return (
		<div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 w-[100%]">
			<div className="relative bg-white w-full max-w-[1220px] font-medium rounded-lg shadow-lg p-6">
				<h2 className="mb-[120px] text-[40px] font-semibold text-center text-gray-800 mb-8">
					Do you want to apply new filter?
				</h2>

				<div className="flex justify-center gap-4">
					<button
						onClick={() => {
							resetDraftFilters()
							closeConfirm()
						}}
						className="w-[184px] px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
					>
						Cancel
					</button>

					<button
						onClick={() => {
							applyDraftFilters()
							closeConfirm()
							closeFilter()
						}}
						className="w-[184px] px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	)
}
