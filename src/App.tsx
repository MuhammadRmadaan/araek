import './assets/styles/App.css';
import {useState,useEffect} from 'react'
import {Route,Routes} from "react-router-dom"
import PageUpButton from './components/home/pageUpBtn';
import Footer from './components/footer/footer';
import MainPage from './pages/MainPage';
import Chalets from './pages/chalets';
import HotelRooms from './pages/rooms';
import Villas from './pages/villas';
import Navbar from './components/header/header';
import Contact from './components/home/contact';

function App() {
  let [menuBtn,setMenuBtn]=useState<HTMLElement | null>(null)
  const getMenuBtn = (menuB:any)=> {
    setMenuBtn(menuB)
    console.log(menuBtn)
  }
  return (
    <div className="App scroll-smooth" dir='rtl'>
      <Navbar getMenuBtn={getMenuBtn}/>
      <PageUpButton/>
      <Routes>
        <Route path='/' element={<MainPage menuBtn={menuBtn}/>} />
        <Route path='/chalets' element={<Chalets/>} />
        <Route path='/hotelrooms' element={<HotelRooms/>} />
        <Route path='/villas' element={<Villas/>} />
      </Routes>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
