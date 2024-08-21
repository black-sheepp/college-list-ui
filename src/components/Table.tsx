import React, { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import CollegeTable from "./CollegeTable";
import FilterSearch from "./FilterSearch";
import collegeData from "../json-data/collegeData.json";
import Institution from "../utils/interface";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loader from "./Loader";

type SortKey = "College_rating" | "fees" | "user_reviews_rating";

const collegesPerPage = 10;

const Table: React.FC = () => {
    const [colleges, setColleges] = useState<Institution[]>(collegeData.slice(0, collegesPerPage));
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortKey, setSortKey] = useState<SortKey | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMoreData, setHasMoreData] = useState<boolean>(true);

    useInfiniteScroll(() => loadMoreColleges());

    const loadMoreColleges = () => {
        if (loading || !hasMoreData) return; // Prevent multiple loads or loading when there's no more data

        setLoading(true);

        setTimeout(() => {
            const currentLength = colleges.length;
            const moreColleges = collegeData.slice(currentLength, currentLength + collegesPerPage);

            if (moreColleges.length > 0) {
                setColleges([...colleges, ...moreColleges]);
            } else {
                setHasMoreData(false); // No more data to load
            }

            setLoading(false);
        }, 1000);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSort = (key: SortKey) => {
        if (sortKey === key && sortOrder === "asc") {
            setSortOrder("desc");
        } else {
            setSortOrder("asc");
            setSortKey(key);
        }
    };

    const sortedColleges = useMemo(() => {
        let sorted = [...colleges];
        if (sortKey) {
            sorted = sorted.sort((a, b) => {
                let aValue: number;
                let bValue: number;

                switch (sortKey) {
                    case "College_rating":
                        aValue = a.user_reviews.rating;
                        bValue = b.user_reviews.rating;
                        break;
                    case "fees":
                        aValue = a.fees;
                        bValue = b.fees;
                        break;
                    case "user_reviews_rating":
                        aValue = a.user_reviews.rating;
                        bValue = b.user_reviews.rating;
                        break;
                    default:
                        return 0;
                }

                return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
            });
        }
        return sorted;
    }, [colleges, sortKey, sortOrder]);

    const filteredColleges = useMemo(() => {
        return sortedColleges.filter((college) =>
            college.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [sortedColleges, searchQuery]);

    return (
        <div className="overflow-x-auto w-full items-center xl:px-32 pb-28">
            <FilterSearch onSearch={handleSearch} onSort={handleSort} />
            <table className="min-w-full border-collapse block md:table">
                <TableHeader />
                <CollegeTable colleges={filteredColleges} />
            </table>
            {loading && hasMoreData && (
                <Loader />
            )}
        </div>
    );
};

export default Table;
