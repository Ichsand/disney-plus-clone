import React from 'react';
import Header from './components/header'
import './App.css';
import Home from './components/Home';
function App() {
    const vutton=(e) =>{
      console.log (React.version)
    } 
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
