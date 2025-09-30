import { create } from "zustand"

interface FiltersStore {
    searchFilter: string
    setSearchFilter: (query: string) => void
    favoritesFilter: boolean
    toggleFavoritesFilter: () => void
    categoryFilter: string
    setCategoryFilter: (category: string) => void
}

export const useFiltersStore = create<FiltersStore>((set) => ({
    searchFilter: "",
    setSearchFilter: (query: string) => set({ searchFilter: query }),
    favoritesFilter: false,
    toggleFavoritesFilter: () => set((state) => ({ favoritesFilter: !state.favoritesFilter })),
    categoryFilter: "All",
    setCategoryFilter: (category: string) => set({ categoryFilter: category }),
}))