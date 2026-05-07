'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { locations, getUniqueStates, type Location, type DayHours } from '../data/locations';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function isOpenNow(loc: Location): boolean {
    const now = new Date();
    const dayName = DAYS[now.getDay()];
    const dayHours = loc.weeklyHours.find((h: DayHours) => h.day === dayName);
    if (!dayHours) return false;
    const toMinutes = (timeStr: string): number => {
        const [time, period] = timeStr.split(' ');
        const parts = time.split(':').map(Number);
        let h: number = parts[0];
        const m: number = parts[1];
        if (period === 'PM' && h !== 12) h += 12;
        if (period === 'AM' && h === 12) h = 0;
        return h * 60 + m;
    };
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    return nowMinutes >= toMinutes(dayHours.open) && nowMinutes < toMinutes(dayHours.close);
}

function getTodayName(): string {
    return DAYS[new Date().getDay()];
}

export default function RestaurantHoursSection() {
    const states = getUniqueStates();
    const [selectedState, setSelectedState] = useState(states[0]?.code || '');
    const [openStatuses, setOpenStatuses] = useState<Record<string, boolean>>({});
    const todayName = getTodayName();

    const filteredLocations = locations.filter((loc: Location) => loc.stateCode === selectedState);
    const selectedStateName = states.find((s: { name: string; code: string }) => s.code === selectedState)?.name || '';

    useEffect(() => {
        const statuses: Record<string, boolean> = {};
        filteredLocations.forEach((loc: Location) => {
            statuses[loc.id] = isOpenNow(loc);
        });
        setOpenStatuses(statuses);
    }, [selectedState]);

    return (
        <section className="w-full py-14 md:py-20" style={{ background: 'linear-gradient(135deg, #0f2b0c 0%, #1A3D17 50%, #0f2b0c 100%)' }}>
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">

                {/* ── Section Header ── */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">

                    {/* Left: Title */}
                    <div className="flex-1">
                        {/* Premium Badge */}
                        <div className="mb-5 inline-flex items-center gap-3 relative">
                            <span
                                className="inline-flex items-center gap-2 text-[#1A3D17] font-black uppercase tracking-[0.15em] text-[11px] py-2 px-5 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #CCEE18 0%, #e8ff4d 50%, #CCEE18 100%)',
                                    boxShadow: '0 0 16px rgba(204,238,24,0.5), 0 2px 8px rgba(0,0,0,0.3)'
                                }}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A3D17] opacity-60"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A3D17]"></span>
                                </span>
                                LIVE HOURS — UPDATED DAILY
                            </span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[1.05]"
                            style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
                        >
                            Papa John's <span className="text-[#CCEE18]">Hours</span><br className="hidden md:block" /> & Locations
                        </h2>
                        <p className="mt-3 text-green-200/80 text-sm max-w-lg leading-relaxed">
                            Select your state to find the nearest{' '}
                            <Link href="/store-locator" className="text-[#CCEE18] underline-offset-2 hover:underline hover:text-white transition-colors font-bold">Papa John's location</Link>{' '}
                            and view up-to-date operating hours.
                        </p>
                    </div>

                    {/* Right: Improved Search/Filter Card */}
                    <div
                        className="w-full lg:w-[380px] flex-shrink-0 rounded-2xl p-5"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(204,238,24,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full bg-[#CCEE18] flex items-center justify-center text-sm">📍</div>
                            <p className="text-[#CCEE18] text-xs font-black uppercase tracking-widest">Filter by State</p>
                        </div>

                        <div className="relative">
                            <label htmlFor="state-filter" className="sr-only">Filter locations by state</label>
                            <select
                                id="state-filter"
                                value={selectedState}
                                onChange={e => setSelectedState(e.target.value)}
                                className="w-full appearance-none rounded-xl px-4 py-3 text-gray-900 font-bold focus:outline-none cursor-pointer text-sm pr-10"
                                style={{ background: 'white', border: '2px solid #CCEE18' }}
                            >
                                {states.map((state: { name: string; code: string }) => (
                                    <option key={state.code} value={state.code}>
                                        {state.name} ({state.code})
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A3D17] font-black">▼</div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <p className="text-green-300 text-xs">
                                <span className="text-[#CCEE18] font-black text-base">{filteredLocations.length}</span>
                                <span className="ml-1">location{filteredLocations.length !== 1 ? 's' : ''} found</span>
                            </p>
                            <span className="text-white text-xs font-bold">{selectedStateName}</span>
                        </div>
                    </div>
                </div>

                {/* ── Location Cards Grid ── */}
                {filteredLocations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {filteredLocations.map((loc: Location) => {
                            const isOpen = openStatuses[loc.id] || false;
                            return (
                                <div
                                    key={loc.id}
                                    className="rounded-xl flex flex-col transition-all duration-300 hover:scale-[1.01]"
                                    style={{
                                        background: 'rgba(255,255,255,0.07)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
                                    }}
                                >
                                    {/* Card Header */}
                                    <div
                                        className="flex items-center justify-between px-4 py-3"
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        <div>
                                            <h3
                                                className="text-white font-black text-base leading-tight"
                                                style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                                            >
                                                {loc.city}
                                            </h3>
                                            <p className="text-green-400/70 text-[10px] font-semibold mt-0.5">{loc.stateCode} · {loc.zipCode}</p>
                                        </div>
                                        <span
                                            className={`flex items-center gap-1 text-[9px] font-black uppercase px-2.5 py-1 rounded-full ${isOpen ? 'text-emerald-300' : 'text-red-300'}`}
                                            style={{ background: isOpen ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)', border: isOpen ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(248,113,113,0.3)' }}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></span>
                                            {isOpen ? 'Open Now' : 'Closed'}
                                        </span>
                                    </div>

                                    {/* Address + Phone */}
                                    <div className="px-4 py-2.5 flex flex-col gap-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                        <p className="text-green-200/70 text-[11px] leading-snug">📍 {loc.address}</p>
                                        <a
                                            href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`}
                                            className="text-[#CCEE18] text-[11px] font-bold hover:text-white transition-colors"
                                        >
                                            📞 {loc.phone}
                                        </a>
                                    </div>

                                    {/* Hours Table */}
                                    <div className="px-4 pt-2.5 pb-3 flex-1">
                                        <p className="text-[#CCEE18]/70 text-[9px] font-black uppercase tracking-widest mb-2">Operating Hours</p>
                                        <div className="space-y-0.5">
                                            {loc.weeklyHours.map((dayHour: DayHours) => {
                                                const isToday = dayHour.day === todayName;
                                                return (
                                                    <div
                                                        key={dayHour.day}
                                                        className={`flex justify-between items-center text-[11px] px-2 py-1 rounded ${isToday ? 'rounded-md' : ''}`}
                                                        style={isToday ? { background: 'rgba(204,238,24,0.12)', border: '1px solid rgba(204,238,24,0.25)' } : {}}
                                                    >
                                                        <span className={`${isToday ? 'text-[#CCEE18] font-black' : 'text-green-200/80 font-medium'}`}>
                                                            {isToday ? `▶ ${dayHour.day}` : dayHour.day}
                                                        </span>
                                                        <span className={`font-mono text-[10px] ${isToday ? 'text-[#CCEE18] font-black' : 'text-white/60'}`}>
                                                            {dayHour.open} – {dayHour.close}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Get Directions Button */}
                                    <div className="px-4 pt-3 pb-4">
                                        <a
                                            href={loc.mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center text-[#1A3D17] font-black py-2.5 rounded-lg transition-all hover:-translate-y-0.5 uppercase text-xs tracking-wide"
                                            style={{
                                                background: 'linear-gradient(90deg, #CCEE18, #d9f535)',
                                                fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif',
                                                boxShadow: '0 4px 14px rgba(204,238,24,0.25)'
                                            }}
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-green-300 text-lg font-semibold">No locations found for this state.</p>
                    </div>
                )}

                {/* ── Bottom CTA ── */}
                <div className="text-center mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="text-green-300/70 text-xs mb-4">Can't find your location? View the complete store directory.</p>
                    <Link
                        href="/store-locator"
                        className="inline-flex items-center gap-2 text-[#1A3D17] font-black py-3.5 px-9 rounded-full transition-all hover:-translate-y-1 uppercase tracking-wider text-sm"
                        style={{
                            background: 'linear-gradient(90deg, #CCEE18, #d9f535)',
                            fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif',
                            boxShadow: '0 6px 20px rgba(204,238,24,0.3)'
                        }}
                    >
                        View All Locations →
                    </Link>
                </div>
            </div>
        </section>
    );
}
