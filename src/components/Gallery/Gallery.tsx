import { useFavorites, useFilters, usePhotos } from "@/hooks"
import { GalleryCard } from "./GalleryCard"
import { Spinner } from "../Loader/Spinner"
import { useEffect } from "react"
import { FavoritesGallery } from "./FavoritesGallery"
import { FadeIn } from "./FadeIn"
import { ErrorGallery } from "./ErrorGallery"

export function Gallery() {
    const { photos, loading, error, getPhotos, getPhotosByQuery } = usePhotos()
    const { searchFilter, categoryFilter, favoritesFilter } = useFilters()
    const { favoritesPhotos, getFavorites } = useFavorites()

    useEffect(() => {
        if (categoryFilter === "All") {
            getPhotos()
        } else {
            getPhotosByQuery(categoryFilter)
        }
    }, [categoryFilter, getPhotos, getPhotosByQuery])

    useEffect(() => {
        getFavorites()
    }, [getFavorites])

    if (loading) {
        return ( <Spinner/> )
    }

    if (favoritesFilter) {
        return <FavoritesGallery />
    }
     
    if (error) {
        return <ErrorGallery />
    }
    
    return (
        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 p-8">
            <FadeIn>
            {
                photos.filter((ph) => { return searchFilter === "" ? ph : ph.photographer.toLowerCase().includes(searchFilter) }).map((photo) => (
                    <GalleryCard key={photo.id} photo={photo} isFavorite={favoritesPhotos.filter(favPh => favPh.id === photo.id).length !== 0} />
                ))
            }
            </FadeIn>
        </div>
    )
}