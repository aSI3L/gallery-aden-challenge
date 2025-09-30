import { CategoryFilter, FavsFilter, SearchFilter } from "./components";

export function Filters() {
    return (
        <div className="pt-8 px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:flex-1 md:max-w-md">
                    <SearchFilter />
                </div>
                
                <div className="flex items-center justify-center gap-3">
                    <CategoryFilter />
                    <FavsFilter />
                </div>
            </div>
        </div>
    )
}