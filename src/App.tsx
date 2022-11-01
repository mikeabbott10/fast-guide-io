import { FastGuide } from "@mikeabbott10/react-fast-guide";
import { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Ctx from "./contexts/Ctx";
import guide from "./Guide";

function App() {
  const {darkMode} = useContext(Ctx);

  useEffect(() => {
    if(darkMode)
      document.body.classList.add('darkMode');
    else
      document.body.classList.remove('darkMode');
  }, [darkMode]);

  return (
    <>
      <Header/>

      <div style={{
        position:"relative",
        top:"2.5rem",
        width: "calc(100% - 2rem)",
        margin: "0 auto",
        padding: "0 1rem",
        maxWidth: "1280px"
      }}>
        <FastGuide
          guide={guide} 
          enableHistory={true}/>
          
        <Footer/>
      </div>
    </>
  );
}

export default App;
