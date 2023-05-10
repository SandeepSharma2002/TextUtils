import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import react, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () =>
  {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(98 141 149)";
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } 
  }

  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container">
        <TextArea heading=" Enter Your Text Below: " />
      </div>
    </>
  );
}

export default App;
