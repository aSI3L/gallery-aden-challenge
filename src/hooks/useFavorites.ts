import { useFavoritesStore } from "@/zustand/favorites.store"

export const useFavorites = () => {
    const favoritesPhotos = useFavoritesStore((state) => state.favoritesPhotos)
    const addFavorite = useFavoritesStore((state) => state.addFavorite)
    const removeFavorite = useFavoritesStore((state) => state.removeFavorite)
    const getFavorites = useFavoritesStore((state) => state.getFavorites)
    const saveFavorite = useFavoritesStore((state) => state.saveFavorite)

    return { favoritesPhotos, addFavorite, removeFavorite, getFavorites, saveFavorite }
}