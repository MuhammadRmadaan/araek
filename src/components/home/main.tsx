// import { Key, useState } from "react";
interface Slide {
  url: string;
  title: string;
}
interface Props {
  slides: Slide[];
  goToSlide: (index: any,dots:any)=>void;
  //autoPlaySlider:(index:any,dots:any)=>any
  getDots:(dots:any)=>any
}
const Main = ({ slides,goToSlide,getDots }: Props) => {
  setTimeout(()=>{
    getDots(document.querySelectorAll("#dots div"))
  },10)
  return (
    <div className="w-full h-screen z-30 pt-40 absolute">
        <div className="container mx-auto h-screen w-screen text-white flex flex-col sm:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mt-44">منتجع أرائك السياحي</h1>
          <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 sm:mt-6 xl:mt-8">فخـامـة الإخـتيار ورقـي الـدار</p>
          <button className="hidden sm:block px-6 py-2 rounded-lg bg-main-gold hover:bg-main-gold-dark transition-all text-white mt-3 sm:mt-7 xl:mt-9">
            إحجز الآن
          </button>
        </div>
        <div id="dots" className="flex text-white text-xl md:text-2xl gap-2 lg:text-3xl lg:gap-3 child:cursor-pointer absolute left-1/2 -translate-x-1/2 bottom-16">
          {slides.map((slide, index) => (
          <div className="" key={index} onClick={()=>goToSlide(index,document.querySelectorAll("#dots div"))}>●</div>
        ))}
        </div>
        <div className="hidden">
        </div>
      </div>
  );
}

export default Main;