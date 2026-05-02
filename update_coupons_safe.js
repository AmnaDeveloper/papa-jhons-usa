const fs = require('fs');
const path = require('path');

// 1. Update page.tsx
const pagePath = path.join(__dirname, 'src/app/(site)/coupons/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Global replaces
pageContent = pageContent.replace(/April 2026/g, 'May 2026');
pageContent = pageContent.replace(/18\+/g, '19+');
pageContent = pageContent.replace(/April 30, 2026/g, 'May 31, 2026');
pageContent = pageContent.replace(/"2026-04-01"/g, '"2026-05-01"');
pageContent = pageContent.replace(/"2026-04-30"/g, '"2026-05-31"');

// Exact Meta Description replaces
const oldDesc = "Save big with 19+ verified Papa John's coupon codes for May 2026. Get 25% off, BOGO pizza deals, free delivery codes & carryout specials — updated daily by our deals team.";
const newDesc = "19+ verified Papa John's coupon codes updated daily for May 2026. Save up to 50% with working promo codes, BOGO deals, and free delivery codes.";
pageContent = pageContent.replace(oldDesc, newDesc);

fs.writeFileSync(pagePath, pageContent);

// 2. Update CouponsClient.tsx
const clientPath = path.join(__dirname, 'src/app/components/CouponsClient.tsx');
let clientContent = fs.readFileSync(clientPath, 'utf8');

clientContent = clientContent.replace(/April 2026/g, 'May 2026');
clientContent = clientContent.replace(/18\+/g, '19+');
clientContent = clientContent.replace(/18 Active Codes/g, '19 Active Codes');
clientContent = clientContent.replace(/val: "18"/g, 'val: "19"');
clientContent = clientContent.replace(/April 15, 2026/g, 'May 2, 2026');

fs.writeFileSync(clientPath, clientContent);

console.log("Coupons page updated successfully");
