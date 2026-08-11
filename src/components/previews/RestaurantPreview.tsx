export default function RestaurantPreview() {
  return (
    <div className="w-full h-full bg-[#1A1512] flex flex-col">
      <div className="relative h-[55%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D2B1F] via-[#2A1F18] to-[#1A1512]" />
        <div className="absolute inset-0 flex flex-col justify-end p-3">
          <span className="text-[7px] text-amber-400/80 tracking-widest uppercase mb-0.5">
            Fine Dining
          </span>
          <h3 className="text-[13px] font-serif text-white/95 leading-tight">Maison Noir</h3>
        </div>
      </div>
      <div className="flex-1 p-3 flex flex-col gap-2">
        <div className="flex gap-2 overflow-hidden">
          {['Menu', 'Gallery', 'Reserve'].map((tab, i) => (
            <span
              key={tab}
              className={`text-[7px] px-2 py-1 rounded-full ${
                i === 0 ? 'bg-amber-600/30 text-amber-300' : 'text-white/40'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="space-y-1.5 flex-1">
          {[
            { name: 'Truffle Risotto', price: '$32' },
            { name: 'Wagyu Tenderloin', price: '$58' },
            { name: 'Sea Bass', price: '$38' },
          ].map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <span className="text-[7px] text-white/70">{item.name}</span>
              <span className="text-[7px] text-amber-400/80">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="h-6 bg-amber-600/80 rounded flex items-center justify-center">
          <span className="text-[7px] text-white font-medium">Reserve a Table</span>
        </div>
      </div>
    </div>
  );
}
