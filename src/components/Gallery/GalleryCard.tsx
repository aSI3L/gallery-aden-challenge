import type { PhotoType } from "@/types/photo.type";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";
import { useFavorites } from "@/hooks";

interface GalleryCardProps {
    photo: PhotoType
    isFavorite: boolean
}

export function GalleryCard({ photo, isFavorite }: GalleryCardProps) {
    const { addFavorite, removeFavorite, saveFavorite } = useFavorites()

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(photo.id)
        } else {
            addFavorite(photo)
            saveFavorite(photo)
        }
    }
    return (
        <Card className="break-inside-avoid p-0 mb-4">
            <CardHeader className="p-0">
                <img src={photo.url} alt={photo.description} className="w-full object-cover rounded-t-md" />
            </CardHeader>
            <CardContent>
                <div className="">
                    <h3 className="text-lg font-semibold">{photo.photographer}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{photo.description}</p>
                </div>
            </CardContent>
            <CardFooter className="pb-3">
                <Button variant="ghost" className="w-full justify-center cursor-pointer" onClick={handleFavoriteClick}>
                    <HeartIcon className={`h-4 w-4 ${isFavorite && "fill-red-500 text-red-500"}`}/>
                </Button>
            </CardFooter>
        </Card>
    )
}