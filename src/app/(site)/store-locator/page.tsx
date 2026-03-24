'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { locations, Location } from '../../data/locations';
import InternalLinks from '../../components/seo/InternalLinks';
import { Search, MapPin, Phone, Clock, Navigation, Zap, Bike } from 'lucide-react';

export default function StoreLocatorPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedState, setSelectedState] = useState('All States');

    const states = useMemo(() => {
        const uniqueStates = Array.from(new Set(locations.map(l => l.state))).sort();
        return ['All States', ...uniqueStates];
    }, []);

    const filteredLocations = useMemo(() => {
        return locations.filter(loc => {
            const matchesSearch = 
                loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                loc.zipCode.includes(searchQuery) ||
                loc.address.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesState = selectedState === 'All States' || loc.state === selectedState;
            return matchesSearch && matchesState;
        });
    }, [searchQuery, selectedState]);

    // Simple function to check if a store is open (mocked logic based on current hour)
    const getStoreStatus = (hoursStr: string) => {
        const now = new Date();
        const hour = now.getHours();
        // Very basic mock: open if between 11 AM and 10 PM
        if (hour >= 11 && hour < 22) return { label: 'Open Now', color: 'text-emerald-500 bg-emerald-50' };
        return { label: 'Closed', color: 'text-red-500 bg-red-50' };
    };

    return (
        <div className="bg-[#fafafa] min-h-screen">
            {/* ── Premium Hero Header ── */}
            <div className="bg-[#1A3D17] py-20 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-[0.05] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#cc0000] rounded-full -ml-40 -mb-40 opacity-[0.05]"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-8 shadow-lg">
                        Find Us Nearby
                    </span>
                    <h1 
                        className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]"
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Store <span className="text-[#CCEE18]">Locator</span>
                    </h1>
                    <p className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-bold tracking-tight">
                        Fresh pizza is just around the corner. Explore over 5,000 locations serving the ingredients you love.
                    </p>
                </div>
            </div>

            {/* ── Advanced Search & Filter Section ── */}
            <div className="max-w-[1200px] mx-auto px-4 -mt-16 md:-mt-24 relative z-20 mb-20">
                <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                        <div className="lg:col-span-12 mb-4">
                             <h2 className="text-xl font-black text-[#1A3D17] uppercase tracking-tighter flex items-center gap-3">
                                 <span className="w-8 h-8 bg-[#CCEE18] rounded-lg flex items-center justify-center text-sm">📍</span>
                                 Search Your Neighborhood
                             </h2>
                        </div>
                        
                        <div className="lg:col-span-6">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">Location Search</label>
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1A3D17] transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="City, Zip Code, or Address..."
                                    className="w-full pl-16 pr-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none transition-all text-gray-900 font-bold shadow-inner"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">Filter by State</label>
                            <div className="relative">
                                <select
                                    className="w-full px-6 py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#CCEE18] focus:bg-white outline-none transition-all text-gray-900 font-bold appearance-none cursor-pointer shadow-inner"
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    {states.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <button className="w-full bg-[#1A3D17] hover:bg-[#CCEE18] hover:text-[#1A3D17] text-white py-5 rounded-[1.5rem] font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-xl shadow-[#1A3D17]/10 active:scale-95">
                                Search 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Results List ── */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-12 pb-32">
                <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-6">
                    <p className="text-[#1A3D17] font-black uppercase text-[10px] tracking-[0.3em]">
                        Showing <span className="text-[#cc0000]">{filteredLocations.length}</span> Papa John's Stores
                    </p>
                    <div className="flex gap-4">
                         <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-gray-100">
                             <Zap size={12} className="text-yellow-500 fill-yellow-500" /> Fast Delivery
                         </div>
                         <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-gray-100">
                             <Bike size={12} className="text-[#1A3D17]" /> Carryout
                         </div>
                    </div>
                </div>

                {filteredLocations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredLocations.map((loc) => {
                            const status = getStoreStatus(loc.hours);
                            return (
                                <div 
                                    key={loc.id} 
                                    className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl hover:border-[#CCEE18] transition-all duration-500 group relative overflow-hidden"
                                >
                                    {/* Corner Badge */}
                                    <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest ${status.color}`}>
                                        {status.label}
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tighter mb-2 group-hover:text-[#cc0000] transition-colors" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                            {loc.city}, {loc.stateCode}
                                        </h3>
                                        <div className="flex items-start gap-3 text-gray-400 group-hover:text-gray-600 transition-colors">
                                            <MapPin size={16} className="mt-1 shrink-0 text-[#1A3D17]" />
                                            <p className="text-sm font-bold leading-relaxed">{loc.address}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 group-hover:bg-[#CCEE18]/10 transition-colors border border-transparent group-hover:border-[#CCEE18]/20">
                                            <div className="flex items-center gap-3">
                                                <Phone size={16} className="text-[#1A3D17]" />
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Call Store</span>
                                            </div>
                                            <a href={`tel:${loc.phone}`} className="text-sm font-black text-[#1A3D17] hover:text-[#cc0000]">{loc.phone}</a>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 group-hover:bg-[#CCEE18]/10 transition-colors border border-transparent group-hover:border-[#CCEE18]/20">
                                            <div className="flex items-center gap-3">
                                                <Clock size={16} className="text-[#1A3D17]" />
                                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Today's Hours</span>
                                            </div>
                                            <span className="text-sm font-black text-[#1A3D17]">{loc.hours}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-auto">
                                        <Link 
                                            href={loc.mapsUrl} 
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 bg-[#1A3D17] text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all shadow-lg active:scale-95"
                                        >
                                            <Navigation size={14} /> Directions
                                        </Link>
                                        <Link 
                                            href={`https://www.papajohns.com/order/menu?storeIdentifier=${loc.id}`}
                                            className="flex items-center justify-center gap-2 bg-[#CCEE18] text-[#1A3D17] py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#1A3D17] hover:text-white transition-all shadow-lg active:scale-95"
                                        >
                                            <Zap size={14} /> Order Now
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                        <div className="text-6xl mb-6">🍕</div>
                        <h2 className="text-3xl font-black text-[#1A3D17] uppercase tracking-tighter mb-4">No Stores Found</h2>
                        <p className="text-gray-400 font-bold mb-8 italic">We couldn't find any Papa John's in "{searchQuery}"</p>
                        <button 
                            onClick={() => { setSearchQuery(''); setSelectedState('All States'); }}
                            className="text-[#cc0000] font-black uppercase text-[10px] tracking-[0.3em] border-b-2 border-[#cc0000] pb-1 hover:text-[#1A3D17] hover:border-[#1A3D17] transition-all"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}

                <div className="mt-32 pt-16 border-t-2 border-gray-100">
                    <InternalLinks />
                </div>
            </div>
        </div>
    );
}
