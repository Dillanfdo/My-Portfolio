export default function HealthcarePreview() {
  return (
    <div className="w-full h-full bg-[#0B0D11] p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] font-semibold text-white/80">Revenue Analytics</span>
        <div className="flex gap-1">
          <div className="px-2 py-0.5 rounded bg-accent/20 text-[7px] text-accent-light">Live</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { label: 'Revenue', value: '$2.4M', change: '+12%' },
          { label: 'Claims', value: '1,847', change: '+8%' },
          { label: 'Patients', value: '3,291', change: '+5%' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/5 rounded-lg p-2 border border-white/5">
            <div className="text-[6px] text-white/40 mb-0.5">{stat.label}</div>
            <div className="text-[9px] font-bold text-white/90">{stat.value}</div>
            <div className="text-[6px] text-emerald-400">{stat.change}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col">
        <div className="text-[7px] text-white/40 mb-2">Monthly Revenue Trend</div>
        <div className="flex-1 flex items-end gap-1">
          {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="h-8 bg-white/5 rounded border border-white/5" />
        <div className="h-8 bg-white/5 rounded border border-white/5" />
      </div>
    </div>
  );
}
