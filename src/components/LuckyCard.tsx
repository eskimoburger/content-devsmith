import { useState } from "react";
import "./LuckyCard.css";

interface LuckyCardProps {
  prizes: string[];
}

export default function LuckyCard({ prizes }: LuckyCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const drawPrize = () => {
    const random = Math.floor(Math.random() * prizes.length);
    setResult(prizes[random]);
    setFlipped(true);
  };

  const reset = () => {
    setFlipped(false);
    setResult(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && !flipped) {
      e.preventDefault();
      drawPrize();
    }
  };

  return (
    <div className="lucky-card-container">
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {result && `คุณได้รับ ${result}`}
      </div>

      <div
        className={`card-wrapper ${flipped ? "" : "clickable"}`}
        onClick={!flipped ? drawPrize : undefined}
        onKeyDown={handleKeyDown}
        tabIndex={flipped ? -1 : 0}
        role="button"
        aria-label="คลิกเพื่อสุ่มรางวัล Lucky Draw"
        aria-disabled={flipped}
      >
        <div className={`card ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <div className="card-face card-front">
            <span>🃏 คลิกเพื่อสุ่ม!</span>
          </div>

          {/* Back */}
          <div className="card-face card-back">
            <span>{result}</span>
          </div>
        </div>
      </div>

      {flipped && (
        <button onClick={reset} className="reset-button" aria-label="ลองสุ่มรางวัลอีกครั้ง">
          ลองอีกครั้ง
        </button>
      )}
    </div>
  );
}
