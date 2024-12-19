import "./home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return ( 
    <section id="contact" className=" bg-main-gold-dark">
      <div className="container mx-auto px-3 sm:px-12 py-12 sm:py-20">
          <div className="text-start text-white  mb-6 md:mb-12 lg:mb-20">
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">لديك إستفسار؟</h2>
            <p className="sm:text-lg md:text-xl text-white/60">فريقنا متاح دائمًا لمساعدتك.</p>
          </div>
        <div className=" flex flex-col-reverse md:flex-row gap-8 sm:gap-16 text-start">
          <div className="bg-gray-200 p-8 md:p-12 h-full rounded-lg xl:min-w-[36rem]">
          <form action="" className="flex flex-col gap-3">
              {/* <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label> */}
              <input type="text" id="full-name" className="bg-gray-100 outline-none border border-gray-300 text-sm rounded-lg p-3" placeholder="الإسم الكامل" required></input>
              <input type="number" id="phone-number" className="bg-gray-100 outline-none border border-gray-300 text-sm rounded-lg p-3" placeholder="رقم الهاتف" required></input>
              <input type="email" id="email" className="bg-gray-100 outline-none border border-gray-300 text-sm rounded-lg p-3" placeholder="البريد الإلكتروني" required></input>
              <textarea rows={10} cols={45} id="message" className="bg-gray-100 outline-none border border-gray-300 text-sm rounded-lg p-3 resize-none" placeholder="التفاصيل" required></textarea>
              <button type="submit" className="p-3 px-6 bg-main-gold hover:bg-main-gold-dark rounded-lg text-white transition-all">إرسال</button>
          </form>
        </div>
        <div className="flex flex-col gap-4 sm:gap-0 bg-main-gold p-8 md:p-12 xl:p-16 rounded-lg">
          <div className="child:transition-all child-hover:bg-main-gold-dark child:rounded-lg child:cursor-default child:p-4 child:py-2 child:sm:p-4 text-gray-200">
            <div className="child:inline-block">
              <FontAwesomeIcon icon={faPhone}/>
              <p dir="ltr" className="mr-2">0500101122</p>
            </div>
            {/* <div className="child:inline-block">
              <FontAwesomeIcon icon={faWhatsapp}/>
              <p dir="ltr" className="mr-2">0500101122</p>
            </div> */}
            <div className="child:inline-block">
              <FontAwesomeIcon icon={faLocationDot}/>
              <p className="mr-2">3 حي الوسام - الطائف - مكة المكرمة</p>
            </div>
            <div className="child:inline-block">
              <FontAwesomeIcon icon={faEnvelope}/>
              <p className="mr-2">araiikchalets@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 text-gray-200 child-hover:bg-main-gold-dark child:p-3 child:pb-1.5 child:rounded-full child:child:text-2xl child:transition-all">
            <a href="https://www.facebook.com" target="_blance">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://www.facebook.com" target="_blance">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="https://www.facebook.com" target="_blance">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
