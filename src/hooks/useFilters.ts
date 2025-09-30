import { useFiltersStore } from "@/zustand/filters.store"

export const useFilters = () => {
    const searchFilter = useFiltersStore((state) => state.searchFilter)
    const setSearchFilter = useFiltersStore((state) => state.setSearchFilter)
    const favoritesFilter = useFiltersStore((state) => state.favoritesFilter)
    const toggleFavoritesFilter = useFiltersStore((state) => state.toggleFavoritesFilter)
    const categoryFilter = useFiltersStore((state) => state.categoryFilter)
    const setCategoryFilter = useFiltersStore((state) => state.setCategoryFilter)

    return { searchFilter, setSearchFilter, favoritesFilter, toggleFavoritesFilter, categoryFilter, setCategoryFilter }
}