function CursorGlow({
  mousePosition,
  dominantMood,
}) {
  return (
    <div
      className={`pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-[120px] z-0 transition-all duration-300 ${
        dominantMood === "yellow"
          ? "bg-yellow-400/20"
          : dominantMood === "blue"
          ? "bg-blue-400/20"
          : dominantMood === "purple"
          ? "bg-purple-500/20"
          : "bg-pink-400/20"
      }`}
      style={{
        left: mousePosition.x - 200,
        top: mousePosition.y - 200,
      }}
    ></div>
  );
}

export default CursorGlow;