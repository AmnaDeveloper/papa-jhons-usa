'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Mocking the email sending API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-gray-100 flex flex-col justify-between">
            {status === 'success' && (
                <div className="bg-emerald-50 border border-emerald-100 text-[#1A3D17] px-8 py-5 rounded-[2rem] mb-10 text-center font-black animate-bounce flex items-center justify-center gap-3">
                    <span className="text-2xl">🔥</span>
                    Hurray! Your message was sent successfully.
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-50 border border-red-100 text-[#cc0000] px-8 py-5 rounded-[2rem] mb-10 text-center font-black flex items-center justify-center gap-3">
                    <span className="text-2xl">⚡</span>
                    Oops! Something went wrong. Try again later.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label htmlFor="name" className="block text-[10px] font-black text-[#1A3D17] uppercase tracking-[0.2em] mb-3 ml-2">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none transition-all text-gray-900 font-bold"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="email" className="block text-[10px] font-black text-[#1A3D17] uppercase tracking-[0.2em] mb-3 ml-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none transition-all text-gray-900 font-bold"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="group">
                    <label htmlFor="topic" className="block text-[10px] font-black text-[#1A3D17] uppercase tracking-[0.2em] mb-3 ml-2">How can we help today?</label>
                    <div className="relative">
                        <select
                            id="topic"
                            className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none transition-all text-gray-900 font-bold appearance-none cursor-pointer"
                            value={formData.topic}
                            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        >
                            <option>General Inquiry</option>
                            <option>Pizza Quality Feedback</option>
                            <option>Promo Code Issues</option>
                            <option>Delivery Help</option>
                            <option>Papa Rewards Program</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                    </div>
                </div>

                <div className="group">
                    <label htmlFor="message" className="block text-[10px] font-black text-[#1A3D17] uppercase tracking-[0.2em] mb-3 ml-2">Your Detailed Feedback</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us everything! We're ready to listen..."
                        className="w-full px-6 py-5 rounded-[2rem] bg-gray-100/50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none transition-all text-gray-900 font-bold resize-none leading-relaxed"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#CCEE18] hover:bg-[#1A3D17] hover:text-white text-[#1A3D17] font-black py-6 rounded-[2rem] transition-all text-sm uppercase tracking-[0.3em] shadow-xl transform active:scale-95 disabled:opacity-50"
                    style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}
                >
                    {status === 'loading' ? '🚀 Dispatching Message...' : 'Send Message →'}
                </button>
            </form>
        </div>
    );
}
