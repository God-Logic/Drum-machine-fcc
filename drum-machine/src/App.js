import { useEffect, useState} from "react"
import "./App.css";

function App() {
  const [activeKey,setActiveKey]= useState('')
  useEffect(() =>{
    document.addEventListener('keydown',(event)=>{
      playSound(event.key.toUpperCase())
    })
  })


  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "/Cev_H2.mp3", // Updated path
    },
    {
      keyCode: 87,
      text: "W",
      src: "/Dsc_Oh.mp3", // Updated path
    },
    {
      keyCode: 69,
      text: "E",
      src: "/Heater-1.mp3", // Updated path
    },
    {
      keyCode: 65,
      text: "A",
      src: "/Heater-2.mp3", // Updated path
    },
    {
      keyCode: 83,
      text: "S",
      src: "/Heater-3.mp3", // Updated path
    },
    {
      keyCode: 68,
      text: "D",
      src: "/Heater-4_1.mp3", // Updated path
    },
    {
      keyCode: 90,
      text: "Z",
      src: "/Heater-6.mp3", // Updated path
    },
    {
      keyCode: 88,
      text: "X",
      src: "/Kick_n_Hat.mp3", // Updated path
    },
    {
      keyCode: 67,
      text: "C",
      src: "/RP4_KICK_1.mp3", // Updated path
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
    setActiveKey(selector)
  }

  return (
    <div className="App">
      <h1>Get Creative</h1>
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div
              onClick={() => {
                playSound(drumPad.text);
              }}
              className="drum-pad"
              id={drumPad.src}
            >
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src} // Updated path
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
