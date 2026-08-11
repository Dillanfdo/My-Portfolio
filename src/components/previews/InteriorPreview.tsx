export default function InteriorPreview() {
  return (
    <div className="w-full h-full bg-[#FAF8F5] flex flex-col">
      <div className="px-4 py-3 flex items-center justify-between border-b border-black/5">
        <span className="text-[9px] font-serif tracking-widest text-[#2C2C2C] uppercase">
          Atelier Studio
        </span>
        <div className="flex gap-3">
          {['Work', 'About', 'Contact'].map((item) => (
            <span key={item} className="text-[7px] text-[#666]">{item}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8E0D5] to-[#D4C8B8]" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <span className="text-[7px] tracking-widest text-[#666] uppercase mb-1">
            Interior Design
          </span>
          <h3 className="text-[14px] font-serif text-[#2C2C2C] leading-tight mb-2">
            Spaces that<br />inspire living
          </h3>
          <div className="w-16 h-5 bg-[#2C2C2C] rounded flex items-center justify-center">
            <span className="text-[6px] text-white tracking-wide">View Portfolio</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 w-16 h-20 bg-white/30 rounded-lg backdrop-blur-sm border border-white/40" />
      </div>
      <div className="grid grid-cols-3 gap-0 border-t border-black/5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-gradient-to-br from-[#D4C8B8] to-[#C4B8A8] border-r border-black/5 last:border-r-0" />
        ))}
      </div>
    </div>
  );
}
