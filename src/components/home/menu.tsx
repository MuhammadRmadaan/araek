const Menu = () => {
  return ( 
    <div className="pt-4">
      <div className="backdrop-blur-lg absolute right-20  overflow-hidden transition-all">
        <div  id="services-menu" className="services-menu flex w-44 items-start flex-col gap-5 bg-white/20 rounded-md font-semibold text-main-g transition-all child:text-white child:transition-all child-hover:text-[#c6b65f]">
          <a href="#a">المعرض</a>
          <a href="#b">مرافـقنـا</a>
          <a href="#c">تواصل معنا</a>
          <a href="#d">تواصل معنا</a>
        </div>
      </div>
    </div>
    
  );
}

export default Menu;