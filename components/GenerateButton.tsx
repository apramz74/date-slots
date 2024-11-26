interface GenerateButtonProps {
  onClick: () => void;
  isSpinning: boolean;
  isRegenerating: boolean;
}

export default function GenerateButton({
  onClick,
  isSpinning,
  isRegenerating,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isSpinning}
      className={`
        w-full py-4 px-8 rounded-lg text-white font-bold text-lg
        transition-all transform hover:scale-105 active:scale-95
        ${
          isSpinning
            ? "bg-[#2F3142] cursor-not-allowed text-gray-400"
            : "bg-gradient-to-r from-[#FF3333] to-[#CC2929] hover:from-[#FF4747] hover:to-[#DD3333] text-white"
        }
        border border-[#2F3142]
      `}
    >
      {isSpinning
        ? "Generating..."
        : isRegenerating
        ? "🎲 Try Again"
        : "✨ Generate Date Idea"}
    </button>
  );
}
