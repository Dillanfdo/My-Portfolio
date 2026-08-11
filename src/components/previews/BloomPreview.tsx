import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function BloomPreview() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full bg-[#0A0B10] p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-[8px] font-bold">
          B
        </div>
        <span className="text-[10px] font-semibold text-white/90">Bloom</span>
        <div className="ml-auto flex gap-1">
          <div className="w-5 h-5 rounded-full bg-white/5" />
          <div className="w-5 h-5 rounded-full bg-white/5" />
        </div>
      </div>
      <div className="flex-1 relative">
        <motion.div
          className="absolute inset-x-4 top-2 bottom-16 rounded-2xl bg-gradient-to-b from-[#1a1b2e] to-[#12131f] border border-white/10 p-4 shadow-xl"
          animate={reducedMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <span className="text-accent text-xs">AI</span>
            </div>
            <div>
              <div className="h-2 w-24 bg-white/20 rounded mb-1.5" />
              <div className="h-1.5 w-16 bg-white/10 rounded" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-1.5 w-full bg-white/8 rounded" />
            <div className="h-1.5 w-4/5 bg-white/8 rounded" />
            <div className="h-1.5 w-3/5 bg-white/8 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
              <span className="text-[8px] text-red-400">Pass</span>
            </div>
            <div className="flex-1 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span className="text-[8px] text-accent-light">Apply</span>
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-2 inset-x-4 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-accent' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
