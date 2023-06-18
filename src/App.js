import React from "react";
import Navbar from './components/Navbar/Navbar' ;
import TwitterPage from "./components/TwitterPage/TwitterPage";

import "./App.css";

function App() {
  return (
    <main> 
      <div className='main'> 
        <div className='gradient' /> 
      </div> 
 
     
    
    <div className="app">
      <Navbar/>
      <TwitterPage />
    </div>
    </main>
  );
}

export default App;