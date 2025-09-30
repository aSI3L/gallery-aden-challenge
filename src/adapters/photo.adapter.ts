import type { PhotoType } from "@/types/photo.type";

export const photoAdapter = (photo: any): PhotoType => ({
    id: photo.id,
    url: photo.src.original,
    photographer: photo.photographer,
    description: photo.alt || "No description",
})