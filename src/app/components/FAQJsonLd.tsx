type FAQ = {
    question: string;
    answer: string;
};

function stripHtml(value: string) {
    return value.replace(/<[^>]*>?/gm, '');
}

export default function FAQJsonLd({ faqs }: { faqs: FAQ[] }) {
    if (!faqs.length) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": stripHtml(faq.answer),
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
