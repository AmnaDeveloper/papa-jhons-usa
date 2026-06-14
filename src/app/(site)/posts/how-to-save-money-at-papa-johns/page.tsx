import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '../../../lib/seo/schema';
import { getTodayFormatted, getMonthYear } from '../../../../lib/utils/date';
import SaveMoneyClient from './SaveMoneyClient';

const slug = 'how-to-save-money-at-papa-johns';
const title = 'How to Save Money at Papa Johns (Without Hunting for Fake Codes)';
const excerpt = "Let's be honest — most 'how to save money' articles list fake codes. Marcus Webb shares the real strategies to slash your Papa Johns bill every time.";
const author = 'Marcus Webb';
const date = '2026-06-01T00:00:00Z';
const dateModified = '2026-06-14T00:00:00Z';
const image = '/how-to-save-money-at-papa-johns.png';

export async function generateMetadata(): Promise<Metadata> {
    const today = getTodayFormatted();
    const month = getMonthYear();

    return {
        title: `How to Save Money at Papa Johns (${month}) — Without Fake Codes`,
        description: `Slash your Papa Johns bill by up to 50% with real, tested strategies. Marcus Webb reveals carryout hacks, rewards tricks, and bundle deals. Updated ${today}.`,
        keywords: [
            'how to save money at Papa Johns',
            'Papa Johns coupons',
            'Papa Johns deals',
            'Papa Rewards',
            'Papa Johns carryout discount',
            'Papa Johns promo codes'
        ],
        authors: [{ name: author, url: 'https://papajohns-menus.us/team' }],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
        alternates: {
            canonical: `https://papajohns-menus.us/posts/${slug}`,
        },
        openGraph: {
            title: `How to Save Money at Papa Johns (${month})`,
            description: `Real tested money-saving strategies at Papa Johns. Forget fake promo codes. Carryout discounts, rewards secrets & bundle hacks.`,
            url: `https://papajohns-menus.us/posts/${slug}`,
            images: [
                {
                    url: `https://papajohns-menus.us${image}`,
                    width: 1200,
                    height: 1200,
                    alt: title
                }
            ],
            type: 'article',
            publishedTime: date,
            modifiedTime: dateModified,
            authors: ['https://papajohns-menus.us/team'],
        },
        twitter: {
            card: 'summary_large_image',
            title: `How to Save Money at Papa Johns (${month})`,
            description: `Real tested money-saving strategies at Papa Johns. Forget fake promo code lists and learn the habits that actually lower the bill.`,
            images: [`https://papajohns-menus.us${image}`],
        }
    };
}

export default function Page() {
    const baseUrl = 'https://papajohns-menus.us';
    const postUrl = `${baseUrl}/posts/${slug}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": excerpt,
        "image": [
            `${baseUrl}${image}`
        ],
        "datePublished": date,
        "dateModified": dateModified,
        "author": {
            "@type": "Person",
            "name": author,
            "url": `${baseUrl}/team`
        },
        "publisher": {
            "@type": "Organization",
            "name": "PapaJohns-Menus.us",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/favicon.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl
        },
        "about": [
            "Papa Johns coupons",
            "Papa Johns deals",
            "Papa Rewards",
            "Pizza savings"
        ]
    };

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Blog", url: `${baseUrl}/posts` },
        { name: "Coupons & Deals", url: `${baseUrl}/posts` },
        { name: title, url: postUrl }
    ]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does Papa Johns always offer a carryout discount?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In most locations, yes — the carryout discount on regular menu-priced pizzas is a standing offer, not a limited-time promo. That said, availability can vary slightly by franchise location, so it's worth checking at checkout before you finalize your order."
                }
            },
            {
                "@type": "Question",
                "name": "Is Papa Rewards free to join?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, there's no cost to sign up. You earn points based on how much you spend, and those points can be redeemed for free menu items down the line."
                }
            },
            {
                "@type": "Question",
                "name": "Do bundle deals change often?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, bundle offers in the app rotate fairly regularly. Checking the Deals section before placing your order takes about ten seconds and can occasionally turn up a better deal than you'd get building the order manually."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <SaveMoneyClient />
        </>
    );
}
