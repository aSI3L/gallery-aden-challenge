import { photoAdapter } from "@/adapters/photo.adapter"
import type { PhotoType } from "@/types/photo.type"
import axios from "axios"

export const getAllPhotos = async (): Promise<PhotoType[]> => {
    const response = await axios.get(`${import.meta.env.VITE_PEXELS_API_URL}/curated`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY
        }
    })

    return response.data.photos.map((photo: any) => photoAdapter(photo))
}

export const getPhotosByQuery = async (query: string): Promise<PhotoType[]> => {
    const response = await axios.get(`${import.meta.env.VITE_PEXELS_API_URL}/search?query=${query}`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY
        }
    })

    return response.data.photos.map((photo: any) => photoAdapter(photo))
}

export const saveFavoritePhoto = (photo: PhotoType) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    favorites.push(photo)
    localStorage.setItem("favorites", JSON.stringify(favorites))
}

export const getFavoritePhotos = (): PhotoType[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]")
}

export const removeFavoritePhoto = (photoId: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    const updatedFavorites = favorites.filter((photo: PhotoType) => photo.id !== photoId)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
}