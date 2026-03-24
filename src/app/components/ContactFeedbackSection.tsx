'use client';

import { useState, useEffect } from 'react';

interface Feedback {
    id: number;
    name: string;
    message: string;
    date: string;
    rating: number;
}

export default function ContactFeedbackSection() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(5);
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch comments on mount
    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const res = await fetch('/api/comments');
            if (res.ok) {
                const data = await res.json();
                setFeedbacks(data);
            }
        } catch (e) {
            console.error('Error fetching feedbacks:', e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !message) return;

        setIsSubmitting(true);
        
        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message, rating })
            });

            if (res.ok) {
                const newFB = await res.json();
                setFeedbacks([newFB, ...feedbacks]);
                setName('');
                setMessage('');
                setRating(5);
            }
        } catch (e) {
            console.error('Error submitting feedback:', e);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-20 space-y-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-black text-[#1A3D17] uppercase tracking-tighter" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                    Customer <span className="text-[#cc0000]">Feed</span>back
                </h2>
                <div className="w-24 h-1.5 bg-[#CCEE18] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Submit Feedback Form */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-black text-[#1A3D17] mb-8 uppercase tracking-widest flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#CCEE18] rounded-full flex items-center justify-center text-xs">✍️</span>
                            Post Your Review
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Full Name"
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none font-bold text-sm transition-all"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Rating</label>
                                    <div className="relative">
                                        <select 
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none font-bold text-sm transition-all appearance-none cursor-pointer"
                                            value={rating}
                                            onChange={(e) => setRating(parseInt(e.target.value))}
                                        >
                                            <option value="5">5 Stars ★★★★★</option>
                                            <option value="4">4 Stars ★★★★</option>
                                            <option value="3">3 Stars ★★★</option>
                                            <option value="2">2 Stars ★★</option>
                                            <option value="1">1 Star ★</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Your Experience</label>
                                <textarea 
                                    placeholder="What's your feedback? We'd love to hear it!"
                                    rows={4}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none font-bold text-sm transition-all resize-none"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#CCEE18] hover:bg-[#1A3D17] hover:text-white text-[#1A3D17] font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-sm disabled:opacity-50 shadow-xl transform active:scale-95"
                                style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}
                            >
                                {isSubmitting ? 'Posting...' : 'Share Experience →'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Database-Connected Feed */}
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-3 custom-scrollbar scroll-smooth">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 italic text-gray-400 text-sm">
                            🍕 Fetching latest feedbacks...
                        </div>
                    ) : (
                        feedbacks.map((fb, idx) => (
                            <div 
                                key={fb.id} 
                                className={`bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm transition-shadow hover:shadow-xl duration-500 ${idx === 0 ? 'animate-new-feedback' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#1A3D17] text-[#CCEE18] rounded-2xl flex items-center justify-center font-black text-lg">
                                            {fb.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-[#1A3D17] text-sm uppercase tracking-tight">{fb.name}</h4>
                                            <div className="flex text-[#CCEE18] text-xs">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={i < fb.rating ? "text-[#CCEE18]" : "text-gray-100"}>★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                        {new Date(fb.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed font-semibold italic pl-16 line-clamp-4">
                                    "{fb.message}"
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #CCEE18;
                    border-radius: 20px;
                    border: 3px solid #fafafa;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #1A3D17;
                }
                @keyframes new-feedback {
                    0% { transform: scale(0.95); opacity: 0; background: #CCEE18; }
                    100% { transform: scale(1); opacity: 1; background: white; }
                }
                .animate-new-feedback {
                    animation: new-feedback 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
}
