"use client";

export default function Toggle({
  mode,
  setMode,
}: {
  mode: "fifo" | "smart";
  setMode: (mode: "fifo" | "smart") => void;
}) {
  return (
    <div className="toggle-group" role="group" aria-label="Scheduling mode">
      <button
        className={`btn ${
          mode === "fifo" ? "btn-mode-active-fifo" : "btn-mode-idle"
        }`}
        onClick={() => setMode("fifo")}
      >
        FIFO
      </button>

      <button
        className={`btn ${
          mode === "smart" ? "btn-mode-active-smart" : "btn-mode-idle"
        }`}
        onClick={() => setMode("smart")}
      >
        Optimized
      </button>
    </div>
  );
}
