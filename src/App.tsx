import './assets/styles/App.css';
import Navbar from './components/header/header';
import Home from './components/home/home';
import Services from './components/home/services';
import Gallery from './components/home/gallery';
import Videos from './components/home/videos';
import Facilities from './components/home/facilities';
import Location from './components/home/location';
import PageUpButton from './components/home/pageUpBtn';
import Contact from './components/home/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App scroll-smooth" dir='rtl'>
        <PageUpButton/>
        <Navbar/>
        <Home/>
        <Services/>
        <Gallery/>
        <Videos/>
        <Facilities/>
        <Location/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
