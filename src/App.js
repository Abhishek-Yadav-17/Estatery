
import './App.css';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Property } from './components/Property';

function App() {
  return (
    <div className="App">
      <Navbar/>      
<BottomNav/>
<Property/>
<Footer/>
    </div>
  );
}

export default App;
