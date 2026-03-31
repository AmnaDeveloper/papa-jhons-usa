'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AutoDateUpdater() {
    const pathname = usePathname();

    useEffect(() => {
        const updateDates = () => {
            const today = new Date();
            const month = today.toLocaleString('default', { month: 'long' });
            const day = today.getDate();
            const year = today.getFullYear();
            const dateStr = `${month} ${day}, ${year}`;
            
            // Text walker to safely find and replace text nodes without breaking React hydration
            const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
            let node;
            const nodesToUpdate = [];
            while (node = walk.nextNode()) {
                if (node.nodeValue && /LAST UPDATED:/i.test(node.nodeValue)) {
                    nodesToUpdate.push(node);
                }
            }

            nodesToUpdate.forEach(n => {
                if (n.nodeValue) {
                    // Match generic "Last Updated: Month [Day, ]Year"
                    n.nodeValue = n.nodeValue.replace(/Last Updated:\s*[a-zA-Z]+\s+(\d{1,2},?\s+)?\d{4}/gi, (match) => {
                        // Preserve original casing of "LAST UPDATED" vs "Last Updated"
                        if (match.startsWith('LAST UPDATED')) {
                            return `LAST UPDATED: ${dateStr.toUpperCase()}`;
                        } else if (match.startsWith('last updated')) {
                            return `last updated: ${dateStr.toLowerCase()}`;
                        }
                        return `Last Updated: ${dateStr}`;
                    });
                }
            });
        };

        // Run immediately after component mounts
        updateDates();

        // Run again slightly later to ensure dynamically loaded innerHTML is caught
        const timer1 = setTimeout(updateDates, 50);
        const timer2 = setTimeout(updateDates, 500);
        const timer3 = setTimeout(updateDates, 1000); // 1s catch-all

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [pathname]);

    return null;
}
