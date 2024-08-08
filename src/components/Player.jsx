import { useRef, useState } from "react";

export default function Player() {

  //You can connect refs with JSX elements
  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)

  const handleClick = () => {
    //ref will always be a js obj that will always and only have a currnet property
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      {/*?? shortcut for ternary if both props are same i.e enteredPlayerName ? enteredPlayerName */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input 
          ref={playerName} 
          type="text" 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
