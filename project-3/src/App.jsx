import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

const App = () => {

  const [isGame, setIsGame] = useState(false);
  const toggleGame = () => {
    setIsGame((pre) => !pre);
  }
  return (
    <div>
      {isGame ? <GamePlay/> : <StartGame toggle={toggleGame}/>}
    </div>
  )
}

export default App