"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState("");

  const decodeMessage = () => {
    const letters = input
      .split(" ")
      .map(num => String.fromCharCode(parseInt(num) + 64))
      .join("");
    setDecoded(letters);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-6 font-[cursive]">
      <motion.h1 
        className="text-4xl font-bold text-pink-600 mb-4 drop-shadow-md"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        💖 Pookie Decoder 💖
      </motion.h1>
      <p className="text-gray-700 mb-2 text-lg">Enter your secret number sequence:</p>
      <input
        className="w-80 p-3 border-2 border-pink-400 rounded-xl shadow-md text-center"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="E.g., 23 8 15 13..."
      />
      <button 
        className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
        onClick={decodeMessage}
      >
        ✨ Decode ✨
      </button>
      {decoded && (
        <motion.p 
          className="mt-6 text-2xl font-bold text-pink-700 bg-white p-3 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎀 Decoded: {decoded} 🎀
        </motion.p>
      )}
      <p className="mt-6 text-sm text-gray-600 italic">Made with 💕 for Pookie lovers!</p>
    </div>
  );
}
