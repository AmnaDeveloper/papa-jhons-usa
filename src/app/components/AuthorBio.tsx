import React from 'react';
import { User, Twitter, Linkedin, Globe } from 'lucide-react';

interface AuthorBioProps {
  authorName: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ authorName }) => {
  const authors: Record<string, any> = {
    "Deals Team": {
      name: "Deals Team",
      role: "Price & Coupon Experts",
      bio: "Our dedicated Deals Team monitors Papa Johns prices and verified promo codes daily. We are committed to helping pizza fans save money on every order.",
      avatar: "🤝"
    },
    "Sarah Jenkins": {
      name: "Sarah Jenkins",
      role: "Senior Food Critic & Nutritionist",
      bio: "Sarah is a food industry veteran with over 10 years of experience in menu analysis and nutritional research. She specializes in fast-food value comparisons.",
      avatar: "👩‍🍳"
    },
    "default": {
      name: authorName || "Editorial Team",
      role: "Menu Contributor",
      bio: "Our editorial team researches and verifies every piece of information to ensure you get the most accurate Papa Johns menu details.",
      avatar: "🍕"
    }
  };

  const author = authors[authorName] || authors["default"];

  return (
    <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border-2 border-dashed border-gray-200 mt-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-gray-100 shrink-0">
          {author.avatar}
        </div>
        <div className="text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
            <h3 className="text-2xl font-black text-[#1A3D17] uppercase tracking-tighter">
              Written By: {author.name}
            </h3>
            <span className="bg-[#cc0000] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
              {author.role}
            </span>
          </div>
          <p className="text-gray-500 font-medium leading-relaxed mb-6 max-w-2xl">
            {author.bio}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Follow Our Updates:</span>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-[#cc0000] border border-gray-100 cursor-pointer transition-colors shadow-sm"><Twitter size={14} /></div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-[#cc0000] border border-gray-100 cursor-pointer transition-colors shadow-sm"><Linkedin size={14} /></div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-[#cc0000] border border-gray-100 cursor-pointer transition-colors shadow-sm"><Globe size={14} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
