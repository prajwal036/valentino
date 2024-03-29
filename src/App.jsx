import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [bt, setBt] = useState("No");
  const [hidden, setHidden] = useState("");
  const [gifs, setGifs] = useState(
    "https://media1.tenor.com/m/9Xq9Jd11x0oAAAAC/ily-i-love-you-babi.gif"
  );

  const [input, setInput] = useState("px-8 py-4");
  const buttonText = [
    "No",
    "Are You sure?",
    "Really sure?",
    "Think Again",
    "Last chance",
    "Surely not?",
    "you might regret this",
    "give it another thought",
    "are you absolutely sure?",
    "This could be a mistake",
    "Have a heart!",
    "Don't be so cold!",
    "Would'nt you reconsider?",
    "Is that you Last answer?",
    "You're Breaking my heart",
    "You've broken my heart",
  ];
  const yesSize = [
    "px-8 py-4 text-xl",
    "px-10 py-5 text-xl",
    "px-12 py-6 text-2xl",
    "px-16 py-8 text-2xl",
    "px-20 py-10 text-3xl",
    "px-24 py-10 text-3xl",
    "px-28 py-12 text-4xl",
    "px-32 py-12 text-4xl",
    "px-36 py-12 text-5xl",
    "px-40 py-14 text-5xl",
    "px-44 py-14 text-6xl",
    "px-48 py-14 text-6xl",
    "px-52 py-14 text-7xl",
    "px-56 py-16 text-7xl",
    "px-60 py-16 text-8xl",
    "px-64 py-20 text-8xl",
    "px-72 py-24 text-9xl",
    "px-80 py-32 text-9xl",
  ];

  function saidNo() {
    setCount(count + 1);
    setGifs("https://media1.tenor.com/m/5t-iIxnzE8MAAAAC/sad-bear-cry.gif");
    setBt(buttonText[Math.floor(Math.random() * buttonText.length)]);
    setInput((prev) => {
      if (prev != "px-80 py-32 text-9xl") {
        return yesSize[count];
      } else {
        return "px-80 py-32 text-9xl";
      }
    });
  }
  function sheSaidYes() {
    setHidden("hidden");
    setGifs(
      "https://media1.tenor.com/m/eze5IzkOlFoAAAAC/milk-and-mocha-bear-hearts.gif"
    );
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className=" mx-auto">
          <img src={gifs} alt="kisses" />
        </div>
        <h1 className="text-3xl">
          {hidden == "" ? "Will you be my valentine?" : "Ok Thanks!!!"}
        </h1>
        <div className="w-full h-auto flex justify-center items-center gap-6 mx-auto p-4">
          <button
            onSubmit={(e) => e.preventDefault()}
            className={`flex justify-center items-center bg-green-700 font-Extrabold rounded-lg hover:bg-green-400 hover:text-white transition ease-in-out delay-100 ${input}  ${hidden}`}
            onClick={sheSaidYes}
          >
            Yes
          </button>
          <button
            onSubmit={(e) => e.preventDefault()}
            className={`flex bg-red-700 px-8 font-Extrabold py-4 rounded-lg hover:bg-red-400 hover:text-white transition ease-in-out delay-100 ${hidden}`}
            onClick={saidNo}
          >
            {bt}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
