export default function ClinicPreview() {
  return (
    <div className="w-full h-full bg-[#F8FAFB] flex flex-col">
      <div className="px-4 py-3 flex items-center justify-between border-b border-slate-200/80">
        <span className="text-[9px] font-semibold tracking-wide text-slate-700">CareWell Clinic</span>
        <div className="flex gap-2">
          {['Services', 'Doctors', 'Contact'].map((item, i) => (
            <span
              key={item}
              className={`text-[7px] ${i === 0 ? 'text-teal-600 font-medium' : 'text-slate-400'}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-slate-100" />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <span className="text-[7px] tracking-widest text-teal-600 uppercase mb-1">
            Professional Healthcare
          </span>
          <h3 className="text-[13px] font-semibold text-slate-800 leading-tight mb-2">
            Compassionate care,<br />modern experience
          </h3>
          <div className="w-20 h-5 bg-teal-600 rounded flex items-center justify-center mb-3">
            <span className="text-[6px] text-white font-medium">Book Appointment</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3 border-t border-slate-200/80">
        {['General Care', 'Diagnostics', 'Consultation'].map((service) => (
          <div
            key={service}
            className="rounded-lg bg-white border border-slate-200/80 p-2 text-center"
          >
            <div className="w-4 h-4 rounded-full bg-teal-100 mx-auto mb-1" />
            <span className="text-[6px] text-slate-600 leading-tight block">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
