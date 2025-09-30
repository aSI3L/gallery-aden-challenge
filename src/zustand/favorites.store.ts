import { getFavoritePhotos, removeFavoritePhoto, saveFavoritePhoto } from "@/services/photo.service";
import type { PhotoType } from "@/types/photo.type";
import { create } from "zustand";

interface FavoritesStore {
    favoritesPhotos: PhotoType[]
    addFavorite: (photo: PhotoType) => void
    removeFavorite: (photoId: number) => void
    getFavorites: () => void
    saveFavorite: (photo: PhotoType) => void
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
    favoritesPhotos: [],
    addFavorite: (photo: PhotoType) => set((state) => ({ favoritesPhotos: [...state.favoritesPhotos, photo] })),
    removeFavorite: (photoId: number) => {
        set((state) => ({ favoritesPhotos: state.favoritesPhotos.filter(photo => photo.id !== photoId) }))
        removeFavoritePhoto(photoId)
    },
    getFavorites: () => {
        const favorites = getFavoritePhotos()
        set({ favoritesPhotos: favorites })
    },
    saveFavorite: (photo: PhotoType) => {
        saveFavoritePhoto(photo)
    }
}))