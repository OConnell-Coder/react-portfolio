import "./App.css";
import { useState } from "react";
import { Nav, About, Portfolio } from "./components";

const App = () => {

  const [ page, setPage ] = useState('about');
  
  return (
    <div className="App">
      <Nav setPage = {setPage}/>

      {
        page=='about' ? 
          <About /> : 
        page=='portfolio' ? 
          <Portfolio /> : 
          <About />
      }
    </div>
  );
};

export default App;
