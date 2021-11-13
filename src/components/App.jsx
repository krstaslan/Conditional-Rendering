import React from "react";
import Loggin from "./Login";
var isLoggin = false;

function App() {
  return (
    <div className="container">
      {
        // in here we use Ternary Operater
      }
      {isLoggin ? <h1>Hello</h1> : <Loggin />}
    </div>
  );
}

export default App;
