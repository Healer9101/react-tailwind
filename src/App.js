import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Description from "./Components/Description";
import Email from "./Components/Email";
import Board from "./Components/Board";

function App() {
  return (
    <>
      <div className="flex justify-around items-center h-screen">
        <Board />
      </div>
    </>
    
  );
}

export default App;
