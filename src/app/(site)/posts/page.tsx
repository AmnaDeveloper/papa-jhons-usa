import Link from 'next/link';
import Image from 'next/image';
import posts from '../../data/posts.json';
import { generateArticleSEO } from '../../lib/seo-config';
import InternalLinks from '../../components/seo/InternalLinks';
import { ArrowRight } from 'lucide-react';

export const metadata = generateArticleSEO(
    "Papa John's Blog & News",
    "Read the latest news, updates, and delicious pizza stories from Papa John's.",
    "posts"
);

export default function BlogListingPage() {
    return (
        <div className="bg-[#fcfaf8] min-h-screen font-sans pb-20">
            {/* ── PREMIUM HERO BANNER ── */}
            <div className="bg-[#1A3D17] border-b-8 border-[#cc0000] text-white py-16 md:py-24 text-center relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCEE18] rounded-full -mr-64 -mt-64 opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <span className="inline-block bg-[#CCEE18] text-[#1A3D17] font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2.5 rounded-full mb-6 shadow-lg">
                        Stay Updated
                    </span>
                    <h1 
                        className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4" 
                        style={{ fontFamily: '"PapaSans-Heavy", "Arial Black", sans-serif' }}
                    >
                        Papa John's <span className="text-[#CCEE18]">Blog</span>
                    </h1>
                    <p className="text-xl text-white/80 font-bold max-w-2xl mx-auto tracking-wide">
                        The latest pizza news, new products, and behind the scenes.
                    </p>
                </div>
            </div>

            {/* ── BLOG POSTS GRID ── */}
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {posts.map((post) => (
                        <Link href={post.slug === 'best-pizza-delivery-near-me' ? `/${post.slug}` : `/posts/${post.slug}`} key={post.id} className="bg-white rounded-[2rem] p-6 shadow-md hover:shadow-2xl hover:border-[#CCEE18] border-2 border-transparent transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                            {/* Decorative element on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCEE18] rounded-bl-full -mr-16 -mt-16 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            
                            <div className="aspect-[16/9] bg-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden shadow-inner">
                                <div className="absolute top-3 left-3 z-10 bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                    {post.category}
                                </div>
                                <img src={post.image} alt={post.imageAlt || post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span>⏰ {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                <span>•</span>
                                <span>{post.author}</span>
                            </div>
                            
                            <h2 className="text-2xl font-black text-[#1A3D17] uppercase leading-tight mb-4 group-hover:text-[#cc0000] transition-colors" style={{ fontFamily: '"PapaSans-Heavy", sans-serif' }}>
                                {post.title}
                            </h2>
                            
                            <p className="text-gray-500 text-sm font-medium mb-8 flex-1 leading-relaxed">
                                {post.excerpt}
                            </p>
                            
                            <div className="mt-auto border-t border-gray-100 pt-5 flex items-center justify-between text-[#1A3D17] text-xs font-black uppercase tracking-widest group-hover:text-[#cc0000] transition-colors">
                                Read Full Guide 
                                <span className="bg-[#CCEE18] text-[#1A3D17] p-2 rounded-full group-hover:bg-[#cc0000] group-hover:text-white transition-colors">
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 border-t-2 border-gray-100 pt-16">
                    <InternalLinks />
                </div>
            </div>
        </div>
    );
}
