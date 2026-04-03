'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        image: "/slider-1.webp", 
        fallbackColor: "bg-[#185F34]",
        alt: "Create your own pizza at Papa Johns",
        link: "/menus-prices"
    },
    {
        id: 2,
        image: "/slider-2.webp",
        fallbackColor: "bg-[#185F34]",
        alt: "Papa Rewards loyalty program",
        link: "/papa-johns-rewards"
    },
    {
        id: 3,
        image: "/slider-3.webp",
        fallbackColor: "bg-[#1f2937]", 
        alt: "Pizzas, Wings, Desserts at Papa Johns",
        link: "/menus-prices/pizzas"
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full overflow-hidden bg-gray-900 group h-[60vh] md:h-[75vh] xl:h-[85vh]">
            {/* Slider Container */}
            <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`w-full min-w-full h-full shrink-0 relative ${slide.fallbackColor} flex items-center justify-center overflow-hidden`}>
                        <Link href={slide.link} className="absolute inset-0 z-10 w-full h-full cursor-pointer" aria-label={slide.alt}></Link>
                        
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            quality={75}
                            sizes="100vw"
                            className="object-cover object-center z-0"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Previous slide"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                aria-label="Next slide"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Pagination Dots matching Image 2 perfectly */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-[10px] z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-5 h-5 rounded-full transition-colors border-[3px] border-[#185F34] shadow-sm ${currentSlide === index ? 'bg-[#185F34]' : 'bg-white hover:bg-gray-100'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
