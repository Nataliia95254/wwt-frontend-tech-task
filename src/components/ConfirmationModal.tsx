import { useTranslation } from 'react-i18next'

import { useFilterStore } from '../store/filterStore'
import { useModalStore } from '../store/modalStore'

export const ConfirmModal = () => {
	const { t } = useTranslation()
	const { isConfirmOpen, closeConfirm, closeFilter } = useModalStore()
	const { applyDraftFilters, resetDraftFilters } = useFilterStore()

	if (!isConfirmOpen) {
		return null
	}

	return (
		<div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 backdrop-blur-md w-full h-full">
			<div className="relative bg-white w-full p-8 rounded-lg shadow-lg overflow-hidden mt-[80px] max-w-[1220px]">
				<button
					onClick={closeConfirm}
					className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900"
				>
					{t('confirmationModal.close')}
				</button>

				<h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
					{t('confirmationModal.applyFilterTitle')}
				</h2>

				<div className="flex justify-center gap-4">
					<button
						onClick={() => {
							resetDraftFilters()
							closeConfirm()
						}}
						className="w-[150px] px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
					>
						{t('confirmationModal.cancel')}
					</button>

					<button
						onClick={() => {
							applyDraftFilters()
							closeConfirm()
							closeFilter()
						}}
						className="w-[150px] px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
					>
						{t('confirmationModal.apply')}
					</button>
				</div>
			</div>
		</div>
	)
}
