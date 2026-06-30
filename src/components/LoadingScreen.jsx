import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="h-screen bg-[#050816] flex items-center justify-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="text-6xl md:text-8xl font-bold text-white tracking-tight"
      >
        Digital Memory Capsule
      </motion.h1>
    </div>
  );
}

export default LoadingScreen;