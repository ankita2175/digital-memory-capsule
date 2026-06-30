import MemoryCard from "./MemoryCard";
import { motion } from "framer-motion";

function Timeline({ memories }) {
  return (
    <motion.div
      className="relative z-10 px-10 lg:px-24 py-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold mb-16">
        Featured Memories
      </h2>

      <div className="relative flex flex-col gap-16">
        <div className="absolute left-6 top-0 w-[2px] h-full bg-white/10"></div>

        {memories.map((memory, index) => (
          <MemoryCard
            key={index}
            memory={memory}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Timeline;