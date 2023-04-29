import './assets/styles/App.css';
import Navbar from './components/header/header';
import Home from './components/home/home';
import Services from './components/home/services';
import Gallery from './components/home/gallery';
import Videos from './components/home/videos';
import Facilities from './components/home/facilities';
import Location from './components/home/location';

function App() {
  return (
    <div className="App" dir='rtl'>
        <Navbar/>
        <Home/>
        <Services/>
        <Gallery/>
        <Videos/>
        <Facilities/>
        <Location/>
    </div>
  );
}

export default App;
