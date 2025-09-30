import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFavorites, useFilters } from "@/hooks";
import { Heart } from "lucide-react";

export function FavsFilter() {
    const { favoritesFilter, toggleFavoritesFilter } = useFilters()
    const { favoritesPhotos } = useFavorites()
    return (
        <Button variant={`${favoritesFilter ? "default" : "outline" }`} className="flex items-center gap-2 cursor-pointer" onClick={toggleFavoritesFilter}>
            <Heart className={`h-4 w-4 ${favoritesFilter && "fill-current"}`} /> Favs <Badge variant="secondary" className="ml-1">{favoritesPhotos.length}</Badge>
        </Button>
    )
}