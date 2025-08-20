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
		<div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 backdrop-blur-md w-full h-full">
			<div className="relative bg-white w-full max-w-[600px] p-8 rounded-lg shadow-lg overflow-hidden mt-[80px] max-w-[1220px]">
				<button
					onClick={closeConfirm}
					className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900"
				>
					✕
				</button>

				<h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
					Do you want to apply new filter?
				</h2>

				<div className="flex justify-center gap-4">
					<button
						onClick={() => {
							resetDraftFilters()
							closeConfirm()
						}}
						className="w-[150px] px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
					>
						Cancel
					</button>

					<button
						onClick={() => {
							applyDraftFilters()
							closeConfirm()
							closeFilter()
						}}
						className="w-[150px] px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	)
}
