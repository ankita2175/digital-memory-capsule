import { motion } from "framer-motion";

function MemoryCard({ memory, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 min-h-[250px] shadow-2xl hover:border-purple-400/40 transition-all duration-300 w-full md:w-[70%] ${
        index % 2 === 0
          ? "self-start"
          : "self-end"
      }`}
    >
      <div
        className={`absolute -left-11 top-8 w-5 h-5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] ${
          memory.color === "yellow"
            ? "bg-yellow-300"
            : memory.color === "blue"
            ? "bg-blue-300"
            : memory.color === "purple"
            ? "bg-purple-400"
            : "bg-pink-300"
        }`}
      ></div>

      <p
        className={`text-sm mb-4 ${
          memory.color === "yellow"
            ? "text-yellow-300"
            : memory.color === "blue"
            ? "text-blue-300"
            : memory.color === "purple"
            ? "text-purple-300"
            : "text-pink-300"
        }`}
      >
        {memory.season}
      </p>

      <h3 className="text-2xl font-semibold mb-4">
        {memory.title}
      </h3>

      <p className="text-gray-300 mt-4 leading-relaxed">
        {memory.description}
      </p>
    </motion.div>
  );
}

export default MemoryCard;