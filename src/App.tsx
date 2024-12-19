import './assets/styles/App.css';
import {useState} from 'react'
import {Route,Routes} from "react-router-dom"
import Footer from './components/footer/footer';
import MainPage from './pages/MainPage';
import Chalets from './pages/chalets';
import HotelRooms from './pages/rooms';
import Villas from './pages/villas';
import Navbar from './components/header/header';
import Contact from './components/home/contact';
import SideMenu from './components/home/sideMenu';

function App() {
  let [sideMenu,setSideMenu]=useState<null|HTMLElement>(null)
  const getMenu = (menuB:any)=> {
    setSideMenu(menuB)
    console.log(sideMenu,"kkk")
  }
  return (
    <div className="App scroll-smooth" dir='rtl'>
      <Navbar sideMenu={sideMenu}/>
      <SideMenu getMenu={getMenu}/>
      <Routes>
        <Route path='/' element={<MainPage /*menuBtn={menuBtn}*//>} />
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
