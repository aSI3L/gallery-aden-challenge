import { usePhotoStore } from "@/zustand/photo.store"

export const usePhotos = () => {
    const photos = usePhotoStore((state) => state.photos)
    const loading = usePhotoStore((state) => state.loading)
    const error = usePhotoStore((state) => state.error)
    const getPhotos = usePhotoStore((state) => state.getPhotos)
    const getPhotosByQuery = usePhotoStore((state) => state.getPhotosByQuery)

    return { photos, loading, error, getPhotos, getPhotosByQuery }
}