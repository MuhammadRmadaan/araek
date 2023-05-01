import {Link}from "react-router-dom"
const Menu = () => {
  return ( 
    <div className="sm:pt-4">
      <div className="backdrop-blur-lg absolute right-20  overflow-hidden transition-all">
        <div  id="services-menu" className="services-menu flex w-44 items-start flex-col gap-5 bg-main-gold/60 rounded-md font-semibold text-main-g transition-all child:text-white child:transition-all child-hover:pr-2">
          <Link to="/chalets">شاليهات</Link>
          <Link to="/villas">فــلل</Link>
          <Link to="/hotelrooms">فندقية</Link>
        </div>
      </div>
    </div>
    
  );
}

export default Menu;