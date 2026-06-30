function AddMemoryModal({
  showForm,
  setShowForm,
  title,
  setTitle,
  description,
  setDescription,
  mood,
  setMood,
  memories,
  setMemories,
}) {
  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#111827] p-10 rounded-3xl w-[90%] max-w-lg border border-white/10">
        <h2 className="text-3xl font-bold mb-6">
          Add Memory
        </h2>

        <input
          type="text"
          placeholder="Memory Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full mb-4 p-4 rounded-xl bg-white/10 border border-white/10 outline-none"
        />

        <textarea
          placeholder="Write your memory..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full mb-6 p-4 rounded-xl bg-white/10 border border-white/10 outline-none min-h-[120px]"
        />

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setMood("yellow")}
            className="w-8 h-8 rounded-full bg-yellow-300"
          ></button>

          <button
            onClick={() => setMood("blue")}
            className="w-8 h-8 rounded-full bg-blue-300"
          ></button>

          <button
            onClick={() => setMood("purple")}
            className="w-8 h-8 rounded-full bg-purple-300"
          ></button>

          <button
            onClick={() => setMood("pink")}
            className="w-8 h-8 rounded-full bg-pink-300"
          ></button>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {
              const newMemory = {
                season: "New Memory",
                title: title,
                description: description,
                color: mood,
              };

              setMemories([
                newMemory,
                ...memories,
              ]);

              setTitle("");
              setDescription("");
              setShowForm(false);
            }}
            className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-xl"
          >
            Save Memory
          </button>

          <button
            onClick={() => setShowForm(false)}
            className="bg-white/10 px-6 py-3 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMemoryModal;