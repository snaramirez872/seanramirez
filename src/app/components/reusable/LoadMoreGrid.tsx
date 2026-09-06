"use client";

import { Children, ReactNode, useState } from "react";
import Grid from "./Grid";

interface LoadMoreGridProps {
    children: ReactNode;
    itemsPerLoad?: number;
}

export default function LoadMoreGrid({ children, itemsPerLoad = 6 }: LoadMoreGridProps) {
    const items = Children.toArray(children);
    const [visibleCount, setVisibleCount] = useState(itemsPerLoad);
    const visibleItems = items.slice(0, visibleCount);
    const hasMore = visibleCount < items.length;

    const handleLoadMore = () => {
        setVisibleCount((curr) => Math.min(curr + itemsPerLoad, items.length))
    };

    return (
        <section className="load-more-container">
            <Grid>
                {visibleItems}
            </Grid>

            {hasMore && (
                <>
                    <section className="grid-fade" />
                    <button
                        className="view-more-button"
                        onClick={handleLoadMore}
                    >
                        View More
                    </button>
                </>
            )}
        </section>
    );
}