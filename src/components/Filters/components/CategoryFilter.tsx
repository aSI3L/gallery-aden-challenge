import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFilters } from "@/hooks/useFilters";

export function CategoryFilter() {
    const { categoryFilter, setCategoryFilter, favoritesFilter } = useFilters()

    const handleValueChange = (value: string) => {
        setCategoryFilter(value)
    }

    return (
        <>
        {
            !favoritesFilter && (
                <Select defaultValue={categoryFilter} onValueChange={handleValueChange}>
                    <SelectTrigger className="w-[130px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Nature">Nature</SelectItem>
                        <SelectItem value="City">City</SelectItem>
                        <SelectItem value="Animals">Animals</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                    </SelectContent>
                </Select>
            )
        }
        </>
    )
}