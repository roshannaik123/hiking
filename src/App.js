import './App.css';
import Ban from './components/Ban';
import Banner from './components/Banner';
import Hike from './components/Hike';
import Hikingc from './components/Hikingc';
import Home from './components/Home';
import Mountain from './components/Mountain';
import Places from './components/Places';


function App() {
  return (
    <div className="App">
    <Home/>
    <Hikingc/>
    <Ban/>
    
    <Hike/>
    <Places/>
    <Mountain/>
    <Banner/>
    </div>
  );
}

export default App;
