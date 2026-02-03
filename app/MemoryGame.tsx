"use client";

import { useEffect, useMemo, useState } from "react";

type Card = {
  id: number;
  emoji: string;
  matched: boolean;
};

const EMOJIS = ["🚀", "💻", "⚡", "🛰️", "🧠", "🧩", "🎯", "🔒"];

function shuffle<T>(arr: T[]) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const totalPairs = EMOJIS.length;

  useEffect(() => {
    const deck = shuffle(
      EMOJIS.flatMap((emoji, index) => [
        { id: index * 2, emoji, matched: false },
        { id: index * 2 + 1, emoji, matched: false },
      ])
    );
    setCards(deck);
    setFlipped([]);
    setMoves(0);
  }, []);

  const matchedCount = useMemo(
    () => cards.filter((c) => c.matched).length / 2,
    [cards]
  );

  function reset() {
    const deck = shuffle(
      EMOJIS.flatMap((emoji, index) => [
        { id: index * 2, emoji, matched: false },
        { id: index * 2 + 1, emoji, matched: false },
      ])
    );
    setCards(deck);
    setFlipped([]);
    setMoves(0);
    setLocked(false);
  }

  function handleFlip(card: Card) {
    if (locked) return;
    if (card.matched) return;
    if (flipped.includes(card.id)) return;

    const next = [...flipped, card.id];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [firstId, secondId] = next;
      const first = cards.find((c) => c.id === firstId);
      const second = cards.find((c) => c.id === secondId);
      if (first && second && first.emoji === second.emoji) {
        setCards((prev) =>
          prev.map((c) =>
            c.emoji === first.emoji ? { ...c, matched: true } : c
          )
        );
        setFlipped([]);
      } else {
        setLocked(true);
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 650);
      }
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.45)] backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-white">Memory Flip</div>
          <div className="mt-1 text-sm text-slate-300">
            Match all pairs with the fewest moves.
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <div>
            Moves <span className="font-semibold text-white">{moves}</span>
          </div>
          <div>
            Pairs{" "}
            <span className="font-semibold text-white">
              {matchedCount}/{totalPairs}
            </span>
          </div>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card) => {
          const isFlipped =
            card.matched || flipped.includes(card.id) || locked;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleFlip(card)}
              className="relative aspect-square rounded-2xl border border-white/10 bg-white/5 text-3xl transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition ${
                  isFlipped ? "opacity-100" : "opacity-0"
                }`}
              >
                {card.emoji}
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-slate-400 transition ${
                  isFlipped ? "opacity-0" : "opacity-100"
                }`}
              >
                Flip
              </span>
            </button>
          );
        })}
      </div>
      {matchedCount === totalPairs && (
        <div className="mt-4 text-sm text-slate-300">
          Nice! You completed the board in {moves} moves.
        </div>
      )}
    </div>
  );
}
