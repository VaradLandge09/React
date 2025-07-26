import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) {
      str += "`~!@#$%^&*()_-=+{}[]|;:'<,>./?\"\\";
    }
    if (numsAllowed) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      let num = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(num);
    }

    setPassword(pass);
  }, [length, charAllowed, numsAllowed]);

  const copyTextToClipBoard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numsAllowed]);

  return (
    <div className="bg-black w-full h-screen overflow-hidden">
      <h1 className="text-center text-2xl text-white mt-2">
        Password generator
      </h1>

      <div className="flex justify-center text-cyan-400">
        <div className="bg-gray-500 rounded-2xl mx-auto my-3 top-10 max-w-md px-4 py-2 self-center">
          <div className="mt-2">
            <input
              readOnly
              className="bg-white rounded-l-2xl px-4 py-2"
              placeholder="Password"
              ref={passRef}
              value={password}
            />
            <button 
            onClick={copyTextToClipBoard}
            className="bg-blue-500 rounded-r-2xl px-4 py-2">Copy</button>
          </div>
          <div className="p-2 mt-2">
            <div>
              <input
                type="range"
                min={6}
                max={20}
                className="cursor-pointer"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="px-2">length: {length}</label>
            </div>

            <div>
              <input 
              type="checkbox"
              onClick={() => {
                setCharAllowed((prev) => !prev);
              }}
              />
              <label>Characters</label>
            </div>

            <div>
              <input 
              type="checkbox"
              onClick={() => {
                setNumsAllowed((prev) => !prev);
              }}
              />
              <label>Numbers</label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
