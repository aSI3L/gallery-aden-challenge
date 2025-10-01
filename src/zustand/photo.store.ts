import { getAllPhotos, getPhotosByQuery } from "@/services/photo.service";
import type { PhotoType } from "@/types/photo.type";
import { AxiosError } from "axios";
import { create } from "zustand";

interface PhotoStore {
    photos: PhotoType[]
    loading: boolean
    error: string | null
    getPhotos: () => Promise<void>
    getPhotosByQuery: (query: string) => Promise<void>
}

export const usePhotoStore = create<PhotoStore>((set) => ({
    photos: [],
    loading: false,
    error: null,
    getPhotos: async () => {
        set({ loading: true, error: null });
        try {
            const response = await getAllPhotos()
            set({ photos: response, loading: false })
        } catch (error: any) {
            if (error instanceof AxiosError) {
                set({ error: error.message })
            }
        } finally {
            set({ loading: false })
        }
    },
    getPhotosByQuery: async (query: string) => {
        set({ loading: true, error: null });
        try {
            const response = await getPhotosByQuery(query)
            set({ photos: response, loading: false })
        } catch (error: any) {
            if (error instanceof AxiosError) {
                set({ error: error.message })
            }
        } finally {
            set({ loading: false })
        }
    }
}))