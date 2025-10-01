import { MessageSquareX } from "lucide-react";

export function ErrorGallery() {
    return (
        <div className="text-center py-16">
            <div className="mb-4">
                <MessageSquareX className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            </div>
            <h4 className="text-2xl font-light text-foreground mb-2">Upps! There was a problem</h4>
            <p className="text-muted-foreground max-w-md mx-auto text-pretty">
                We are experiencing some issues fetching the photos. Please try again later. If the problem persists, contact support.
            </p>
        </div>
    )
}