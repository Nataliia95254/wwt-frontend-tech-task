import { useQuery } from '@tanstack/react-query'

import { FilterItem } from '../shared/api/types/Filter'
import filterDataJson from '../shared/temp/filterData.json'

interface FilterData {
	filterItems: FilterItem[]
}

export const useFilterData = () => {
	return useQuery<FilterData>({
		queryKey: ['filterData'],
		queryFn: async () => {
			// Return the imported JSON data directly
			return filterDataJson as FilterData
		}
	})
}
