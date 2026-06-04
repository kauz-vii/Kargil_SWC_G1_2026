import { useState } from "react";

function Hello() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleSubmit = () => {
    if (!input.trim()) return;

    const newHistory = history.slice(0, currentIndex + 1);

    newHistory.push(input);

    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setInput("");
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentValue =
    currentIndex >= 0 ? history[currentIndex] : "No Input Yet";

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter anything..."
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <button
        onClick={handleUndo}
        disabled={currentIndex <= 0}
      >
        Undo
      </button>

      <button
        onClick={handleRedo}
        disabled={currentIndex >= history.length - 1}
      >
        Redo
      </button>

      <h1>{currentValue}</h1>
    </div>
  );
}

export default Hello;