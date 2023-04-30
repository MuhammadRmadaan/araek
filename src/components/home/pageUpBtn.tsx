const PageUpButton = () => {

window.onscroll=()=>{
    if(window.scrollY>900){
      (document.querySelector(".page-up") as any).classList.remove("hidden")
    }else (document.querySelector(".page-up") as any).classList.add("hidden")
  }
  
  return ( 
    <a href="#home" className="page-up hidden hover:pb-12 transition-all sm:w-12 sm:h-12 bg-main-gold p-4 pb-2 fixed bottom-10 right-10 sm:bottom-12 sm:right-12 rounded-full z-50">
      <i className="inline-block p-1 border-solid border-white border-r-2 border-t-2 -rotate-45">
      </i>
    </a>
  );
}

export default PageUpButton;