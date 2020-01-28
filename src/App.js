import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
function App() {
  return (
    <div className="App">
      <div ><Header /></div>
      <main id="main">
        <Home/>
        <Login/>
      </main>
      
      <div ><Footer /></div>
    </div>
  );
}

export default App;
