import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '../shared/api/types/Filter'
import filterDataJson from '../shared/temp/filterData.json'

interface FilterData {
	filterItems: FilterItem[]
}

interface UseFilterDataResult {
	filterItems: FilterItem[]
	isLoading: boolean
	isError: boolean
	error?: unknown
}

export const useFilterData = (): UseFilterDataResult => {
	const { data, isLoading, isError, error } = useQuery<FilterData>({
		queryKey: ['filterData'],
		queryFn: async () => filterDataJson as FilterData,
		staleTime: 1000 * 60 * 5,
		cacheTime: 1000 * 60 * 10,
		onError: err => console.error('Failed to load filter data:', err)
	})

	return {
		filterItems: data?.filterItems || [],
		isLoading,
		isError,
		error
	}
}
