"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlotMachineProps {
  isSpinning: boolean;
  result: DateIdea | null;
}

interface DateIdea {
  dayTime: string;
  activity: string;
  pricePoint: string;
}

export default function SlotMachine({ isSpinning, result }: SlotMachineProps) {
  return (
    <div className="space-y-4">
      <SlotItem
        label="Day & Time"
        value={result?.dayTime}
        isSpinning={isSpinning}
        delay={0}
      />
      <SlotItem
        label="Activity"
        value={result?.activity}
        isSpinning={isSpinning}
        delay={0.5}
      />
      <SlotItem
        label="Price"
        value={result?.pricePoint}
        isSpinning={isSpinning}
        delay={1}
      />
    </div>
  );
}

interface SlotItemProps {
  label: string;
  value: string | undefined;
  isSpinning: boolean;
  delay: number;
}

function SlotItem({ label, value, isSpinning, delay }: SlotItemProps) {
  return (
    <div className="bg-[#1A1B23] rounded-lg p-4 border border-[#2F3142] relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3333]/0 to-[#FF3333]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

      <div className="text-sm text-[#FF3333] mb-1 font-medium flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#FF3333] rounded-full" />
        {label}
      </div>

      <AnimatePresence mode="wait">
        {isSpinning ? (
          <motion.div
            key="spinning"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay, duration: 0.3 }}
            className="h-8 bg-[#2F3142] animate-pulse rounded relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF3333]/10 to-transparent animate-shimmer" />
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-semibold text-white"
          >
            {value || "???"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
