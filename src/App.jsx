import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import Timeline from "./components/Timeline";
import AddMemoryModal from "./components/AddMemoryModal";
import { useState, useEffect } from "react";
import {motion} from "framer-motion";

function App() {const [memories, setMemories] = useState(() => {
  const savedMemories = localStorage.getItem("memories");

  return savedMemories
    ? JSON.parse(savedMemories)
    : [
        {
          season: "Summer 2025",
          title: "Midnight Conversations",
          description:
            "A memory preserved through late-night talks, city lights, and quiet emotions.",
          color: "purple",
        },

        {
          season: "Winter 2024",
          title: "First Snowfall",
          description:
            "Frozen streets, warm coffee, and memories that still glow softly over time.",
          color: "blue",
        },

        {
          season: "Spring 2023",
          title: "The Beginning",
          description:
            "The first chapter of a story filled with nostalgia, growth, and change.",
          color: "pink",
        },
      ];
});
const [showForm, setShowForm] = useState(false);
const [title, setTitle] = useState("");
const [description, setDescription]= useState("");
const [mood, setMood]= useState("purple");
const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});
const [loading, setLoading] = useState(true);
useEffect(() => {
  localStorage.setItem(
    "memories",
    JSON.stringify(memories)
  );
}, [memories]);
useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener(
    "mousemove",
    handleMouseMove
  );

  return () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );
  };
}, []);
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
if (loading) {
  return <LoadingScreen />;
}
const dominantMood =
  memories[0]?.color || "purple";
  const backgroundClass =
  dominantMood === "yellow"
    ? "bg-gradient-to-br from-[#3D3200] via-[#0B1020] to-[#1A1400]"
    : dominantMood === "blue"
    ? "bg-gradient-to-br from-[#06152D] via-[#102B5C] to-[#1A3D75]"
    : dominantMood === "purple"
    ? "bg-gradient-to-br from-[#120824] via-[#22104A] to-[#0B1020]"
    : "bg-gradient-to-br from-[#2A0B20] via-[#4A1035] to-[#120818]";
  return (
    <div className={`min-h-screen text-white overflow-hidden relative transition-all duration-1000 ${backgroundClass}`}>
      <CursorGlow
        mousePosition={mousePosition}
        dominantMood={dominantMood}
      />
      {/*Glow background effects*/}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-purple-500 opacity-40 blur-[150px] rounded-full"        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
      </motion.div>
      
      <div className="absolute top-[-200px] right-[-100px] w-[600px] bg-blue-500 opacity-40 blur-[150px] rounded-full"></div>

        {/*Hero section*/}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 min-h-screen text-center px-6">

        {/*Left content*/}
        <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <motion.div 
          className="relative"
          initial = {{opacity: 0, x:-100}}
          animate = {{ opacity: 1, x: 0}}
          transition= {{ duration: 1}}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-bold leading-none">
            Digital <br />
            Memory<br />
            Capsule
          </h1>
        </motion.div>

        {/*Right content*/}
        <motion.div 
          className="w-full max-w-lg mt-8 lg:mt-0 text-center lg:text-left bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
          initial={{ opacity:0, y:80 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 , delay: 0.4}}
        >
          <p className=" text-gray-300 text-xl leading-relaxed mb-10">
            Preserve your memories in a cinematic digital experience that evolves with time, emotion, and storytelling.
          </p>
          
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 hover:scale-105 hover:shadow[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 ">
          Enter Capsule
          </button>
        </motion.div>
      
      </section>
      {/*Memory preview section*/}
      <Timeline memories={memories} />
      <AddMemoryModal
        showForm={showForm}
        setShowForm={setShowForm}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        mood={mood}
        setMood={setMood}
        memories={memories}
        setMemories={setMemories}
      />
      <motion.button
        onClick={() => setShowForm(true)}
        whileHover= {{scale:1.1}}
        whileTap={{ scale:0.95}}
        className="fixed bottom-6 right-6 bg-purple-500 hover:bg-purple-400 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full text-3xl sm:text-4xl shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-center z-50 transition-all"      >+</motion.button>
    </div>
  );
}
export default App;