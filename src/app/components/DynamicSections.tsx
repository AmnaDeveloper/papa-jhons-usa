'use client';

import dynamic from 'next/dynamic';

const MenuGuideSection = dynamic(() => import("./MenuGuideSection"), { ssr: false });
const RestaurantHoursSection = dynamic(() => import("./RestaurantHoursSection"), { ssr: false });
const CouponsSection = dynamic(() => import("./CouponsSection"), { ssr: false });

export default function DynamicSections() {
    return (
        <>
            <MenuGuideSection />
            <RestaurantHoursSection />
            <CouponsSection />
        </>
    );
}
