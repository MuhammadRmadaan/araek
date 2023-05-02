import { useState,useRef,useEffect } from "react";
import Main from "./main";
import "./home.css";
import slide1 from "../../assets/images/slides/slide1.jpg"
import slide2 from "../../assets/images/slides/slide2.jpg"
import slide3 from "../../assets/images/slides/slide3.jpg"
import slide4 from "../../assets/images/slides/slide4.jpg"
import slide5 from "../../assets/images/slides/slide5.jpg"
import slide6 from "../../assets/images/slides/slide6.jpg"
import slide7 from "../../assets/images/slides/slide7.jpg"
import SideMenu from "./sideMenu";
const Home = (/*{menuBtn}:Props*/) => {
  interface slide {
    url:string,
    title?:string,
  }
  const slides:slide[] = [
    {url:slide1,title:"slide1"},
    {url:slide2,title:"slide2"},
    {url:slide3,title:"slide3"},
    {url:slide4,title:"slide4"},
    {url:slide5,title:"slide5"},
    {url:slide6,title:"slide6"},
    {url:slide7,title:"slide7"},
  ]
  let [currentIndex,setCurrentIndex]=useState(0)
  
  let dotsArray:any[]=[]
  let menu:any
  const nextSlide = ()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    changeColor(currentIndex+1)
  }
  const changeColor = (index:number)=> void dotsArray.map((dot:any)=>dotsArray.indexOf(dot)===index?dot.className="text-main-gold":dot.className="")
  const getDots = (dots:any)=> {
    dotsArray =  Array.from(dots)
  }
  const getMenu = (men:any)=>{
    menu = men
  }
  const goToSlide=(index:any)=>{
    setCurrentIndex(index)
    changeColor(index)
  }
  const timerRef = useRef<any | null>(null)
  if(timerRef.current){
    clearTimeout(timerRef.current)
  }
  useEffect(()=>{
    timerRef.current=setTimeout(()=>{
      nextSlide();
    },3000)
  })  
  return ( 
    <main
      id="home"
      className="h-screen w-full flex flex-col"
    >
      <div id="menu-container" className="sm:hidden absolute top-0 left-0 w-full h-full">
        <SideMenu getMenu={getMenu}/>
      </div>
      <div className=" h-[80%] sm:h-full w-full top-0 left-0 absolute bg-black/60 z-20">
        
      </div>
      <Main slides={slides} goToSlide={goToSlide} getDots={getDots} />
      <div id="slider" className="bg-cover bg-center h-[80%] sm:h-full w-full transition-all z-10"
        style={{backgroundImage:`url('${slides[currentIndex].url}')`}}>
      </div>
    </main>
    );
}

export default Home;