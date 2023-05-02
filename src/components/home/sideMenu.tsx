import { Link } from "react-router-dom";
import Menu from "./menu";
interface Props {
  getMenu:(menu:any)=>any
}
const SideMenu = ({getMenu}:Props) => {
  setTimeout(()=>{
    getMenu(document.querySelector("aside"))
    document.querySelectorAll(".menu-opt").forEach((opt)=>{
      opt.addEventListener('click',()=>{
        document.querySelector("aside")?.classList.add("hidden")
      })
    })
  },10)
  return (
    <aside className="hidden absolute top-0 left-0 z-50 lleft-full w-screen h-screen bg-main-gold-dark">
      <div className="flex flex-col h-full justify-between pb-12 pt-44">
        <ul className="relative">
        <li className="flex flex-col gap-8 md:gap-10 text-white child-hover:text-main-color-light child:transition-all">
          <Link to="/" className=" menu-opt text-xl">الرئيسية</Link>
          <div className="services-container">
            <a href="#services" className="services menu-opt text-xl">خدماتنا  <span id="services-menu-arrow" className="services-menu-arrow inline-block p-0.5 border-2 border-white border-solid border-t-transparent border-r-transparent -rotate-45 mb-0.5 mr-0.5 transition-all"></span></a>
            <Menu/>
          </div>
          <a className=" menu-opt text-xl" href="#gallery">المعرض</a>
          <a className=" menu-opt text-xl" href="#facilities">مرافـقنـا</a>
          <a className=" menu-opt text-xl" href="#contact">تواصل معنا</a>
        </li>
      </ul>
        <p className="text-white/70">
          بواسطة{" "}
          <a
            href="https://athr.company"
            rel="noreferrer"
            target="_blank"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F37335] to-[#FDC830]"
          >
            ATHR
          </a>
          <br />
          جميع الحقوق محفوظة ©{" "}
          <span id="date-year">{new Date().getFullYear()}</span>
        </p>
      </div>
      
    </aside>
  );
}

export default SideMenu;