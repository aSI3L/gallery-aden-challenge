import { useFavorites, useFilters } from "@/hooks";
import { Heart } from "lucide-react";
import { GalleryCard } from "./GalleryCard";
import { FadeIn } from "./FadeIn";

export function FavoritesGallery() {
    const { favoritesPhotos } = useFavorites()
    const { searchFilter } = useFilters()
    return (
        <>
        {
            favoritesPhotos.length === 0 ? (
                <div className="text-center py-16">
                    <div className="mb-4">
                        <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    </div>
                    <h4 className="text-2xl font-light text-foreground mb-2">You don't have favorites yet</h4>
                    <p className="text-muted-foreground max-w-md mx-auto text-pretty">
                        Browse the gallery and mark the photos you like the most by clicking on the heart.
                    </p>
                </div>
            ) : (
                <div className="columns-1 md:columns-3 lg:columns-4 gap-4 p-8">
                    <FadeIn>
                    {
                        favoritesPhotos.filter((ph) => { return searchFilter === "" ? ph : ph.photographer.toLowerCase().includes(searchFilter) }).map((photo) => (
                            <GalleryCard key={photo.id} photo={photo} isFavorite={favoritesPhotos.filter(favPh => favPh.id === photo.id).length !== 0} />
                        ))
                    }
                    </FadeIn>
                </div>
            )
        }
        </>
    )
}