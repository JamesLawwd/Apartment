import ExploreHouses from './components/ExploreHouses';
import Home from './components/Home';
import Navbar from './components/Navbar'

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
        {/* About Component */}
      </div>
      <div id="contact">
        {/* Contact Component */}
      </div>
      <div className="pt-16"> 
        
      </div>
    </div>
  );
}

export default App;