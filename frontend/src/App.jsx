import React from 'react';
import Contact from './components/Contact'
import Overview from './components/Overview'
import ExploreHouses from './components/ExploreHouses';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-50 cursor-pointer">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="explore">
        <ExploreHouses />
      </div>
      <div id="about">
        <Overview/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div className="pt-16"> 
        
        
      </div>
      <Footer />
    </div>
    
  );
}

export default App;