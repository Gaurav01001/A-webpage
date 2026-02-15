import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

/* ---------------- STATE ---------------- */
export const pageAtom = atom(0);

/* ---------------- PAGES ---------------- */
export const pages = [
    { front: "/img/entrance.webp", back: "/img/about.webp" },
    { front: "/img/contact-1.webp", back: "/img/contact-2.webp" },
    { front: "/img/gallery-1.webp", back: "/img/gallery-2.webp" },
    { front: "/img/gallery-3.webp", back: "/img/gallery-4.webp" },
    { front: "/img/gallery-5.webp", back: "/img/stones.webp" },
    { front: "/img/swordman.webp", back: "/img/swordman-partial.webp" },
    { front: "/img/entrance.webp", back: "/img/about.webp" }, // Final page loop
];

/* ---------------- MEMORIES ---------------- */
const memories = [
    { type: "text", note: "Welcome to the journey." },
    { type: "text", note: "Every step is a new chapter." },
    { type: "text", note: "Exploring the unknown depths." },
    { type: "text", note: "Capturing moments in time." },
    { type: "text", note: "Stone cold resolve." },
    { type: "text", note: "The warrior's path." },
    { type: "text", note: "The end is just the beginning." },
];

/* ---------------- UI ---------------- */
export function UI({ onContinue }) {
    const [page, setPage] = useAtom(pageAtom);
    const [currentMemory, setCurrentMemory] = useState(null);

    useEffect(() => {
        // page flip sound
        const audio = new Audio("/audio/loop.mp3"); // Using available audio file loop.mp3 or specific if I had it.
        // The user has /audio/loop.mp3. I will try to use it cautiously or just comment out if it's a music loop, not a sf.
        // I'll comment out the audio play to be safe as I don't have a flip sound.
        // audio.play().catch(() => {});

        // page → memory mapping
        if (page === 0) {
            setCurrentMemory({
                type: "text",
                note: "Click to open the book.",
            });
        } else if (page - 1 < memories.length) {
            setCurrentMemory(memories[page - 1]);
        } else {
            setCurrentMemory(null);
        }
    }, [page]);

    return (
        <main className="fixed inset-0 z-10 pointer-events-none flex justify-center items-end">
            <div className="pointer-events-auto flex flex-col items-center gap-4 p-6">

                {/* MESSAGE / IMAGE */}
                {currentMemory && (
                    <div className="max-w-xl bg-black/70 px-6 py-4 rounded-xl backdrop-blur text-center border border-white/10">
                        {currentMemory.type === "text" && currentMemory.note && (
                            <p className="text-white text-sm leading-relaxed font-general">
                                {currentMemory.note}
                            </p>
                        )}

                        {currentMemory.type === "image" && (
                            <img
                                src={currentMemory.src}
                                alt=""
                                className="max-h-60 mx-auto rounded-lg"
                            />
                        )}
                    </div>
                )}

                {/* BUTTONS */}
                <div className="flex gap-3 flex-wrap justify-center font-circular-web">
                    {pages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage(index)}
                            className={`px-4 py-2 rounded-full border transition text-xs uppercase ${index === page
                                    ? "bg-white text-black border-white"
                                    : "bg-black/40 text-white border-white/20 hover:bg-white/10"
                                }`}
                        >
                            {index === 0 ? "Cover" : `Page ${index}`}
                        </button>
                    ))}

                    <button
                        onClick={() => setPage(pages.length)}
                        className={`px-4 py-2 rounded-full border transition text-xs uppercase ${page === pages.length
                                ? "bg-white text-black border-white"
                                : "bg-black/40 text-white border-white/20 hover:bg-white/10"
                            }`}
                    >
                        Back
                    </button>
                </div>
            </div>
        </main>
    );
}
