import "./App.css";
import { useState } from "react";
import { Nav, About, Portfolio, Contact } from "./components";

const App = () => {

  const [ page, setPage ] = useState('about');
  
  return (
    <div className="App">
      <div id="pg-content">
      <header>
        <Nav setPage = {setPage}/>
      </header>

      {
        page==='about' ? 
          <About /> : 
        page==='portfolio' ? 
          <Portfolio /> : 
        page==='contact' ? 
          <Contact /> : 
          <About />
      }
      </div>

      <footer id="footer">
        <div>
          <a href='https://github.com/OConnell-Coder' target='_blank'>GitHub Profile</a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/stevie-o-connell-965051274/' target='_blank'> LinkedIn Profile</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
