import { useState } from "react";

export default function Hello() {
  const [clickCount, setClickCount] = useState(0);
  const [value, setValue] = useState(1);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount % 3 === 0) {
      setValue((prev) => prev * 2);
    }
  };

  return (
    <div>
      <h2>Value: {value}</h2>
      <p>Clicks: {clickCount}</p>
      <p>My value doubles every 3 clicks!!</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}