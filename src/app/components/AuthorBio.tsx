import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface AuthorBioProps {
  authorName: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ authorName }) => {
  const authors: Record<string, any> = {
    "Deals Team": {
      name: "Deals Team",
      role: "Deals & Price Review",
      bio: "We review Papa Johns deal examples, menu-price notes, rewards terms, and checkout guidance using public offers, official ordering pages, and reader correction reports. Promotions can change by store and account, so every article asks readers to confirm the final cart before paying.",
      avatar: "",
      method: "Reviewed against public Papa Johns offer pages, app/checkout wording where available, and reader-submitted corrections.",
      sources: ["PapaJohns.com deals and rewards pages", "Official checkout terms", "Reader corrections"]
    },
    "Sarah Jenkins": {
      name: "Sarah Jenkins",
      role: "Family & Menu Guide Editor",
      bio: "Sarah writes practical ordering guides for families, group meals, and menu comparisons. Her articles focus on order planning, portion value, picky-eater choices, and when to verify item availability before checkout.",
      avatar: "",
      method: "Reviewed using public menu information, official nutrition/allergen pages, and practical order-planning scenarios.",
      sources: ["Papa Johns menu pages", "Official nutrition information", "Internal editorial review"]
    },
    "default": {
      name: authorName || "Editorial Team",
      role: "Editorial Review",
      bio: "Our editorial team maintains independent Papa Johns menu guides for planning purposes. We avoid presenting prices, coupons, nutrition, or store details as final because availability can change by location.",
      avatar: "",
      method: "Reviewed against public menu information, official brand resources, and page-specific correction reports.",
      sources: ["Official Papa Johns resources", "Public menu information", "Reader corrections"]
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
          <div className="grid gap-4 md:grid-cols-2 text-left">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-black text-[#1A3D17] uppercase tracking-widest mb-2">
                <CheckCircle size={14} className="text-[#cc0000]" /> Review Method
              </div>
              <p className="text-xs font-bold text-gray-500 leading-relaxed">{author.method}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-[10px] font-black text-[#1A3D17] uppercase tracking-widest mb-2">
                <ExternalLink size={14} className="text-[#cc0000]" /> Sources Checked
              </div>
              <p className="text-xs font-bold text-gray-500 leading-relaxed">{author.sources.join(' • ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
