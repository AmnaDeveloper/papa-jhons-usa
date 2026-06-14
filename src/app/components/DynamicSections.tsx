'use client';

import dynamic from 'next/dynamic';

const MenuGuideSection = dynamic(() => import("./MenuGuideSection"), { ssr: false });
const RestaurantHoursSection = dynamic(() => import("./RestaurantHoursSection"), { ssr: false });

export default function DynamicSections() {
    return (
        <>
            <MenuGuideSection />
            <RestaurantHoursSection />
        </>
    );
}
