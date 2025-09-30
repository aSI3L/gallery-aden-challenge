import { Input } from "@/components/ui/input";
import { useFilters } from "@/hooks/useFilters";
import { Search } from "lucide-react";

export function SearchFilter() {
  const { searchFilter, setSearchFilter } = useFilters()

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value.toLowerCase())
  }
  
    return (
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            value={searchFilter}
            onChange={handleValueChange}
            placeholder="Search by photographer's name..."
            className="pl-10 bg-card border-border"
          />
        </div>
    )
}