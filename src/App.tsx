import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    // important, never remove this sdk init
    sdk.actions.ready();
  }, []);

  const [counter, setCounter] = useState(0);
  const [buttonColor, setButtonColor] = useState("bg-blue-600");

  const colors = [
    "bg-blue-600",
    "bg-red-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-yellow-600",
    "bg-pink-600",
    "bg-indigo-600",
    "bg-orange-600",
  ];

  const handleColorChange = () => {
    const currentIndex = colors.indexOf(buttonColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setButtonColor(colors[nextIndex]);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Counter App
      </h1>

      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center">
        <div className="text-8xl font-bold text-white mb-8">{counter}</div>

        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={() => setCounter(counter + 1)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Increase Counter
          </button>

          <button
            type="button"
            onClick={handleColorChange}
            className={`px-6 py-3 ${buttonColor} text-white rounded-lg hover:opacity-80 transition-all font-semibold`}
          >
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
