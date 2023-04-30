import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop,faHotel,faDumpster,faUtensils,faClockRotateLeft,faWaterLadder } from "@fortawesome/free-solid-svg-icons";
const Facilities = () => {
  return ( 
    <section id="facilities" className=" bg-gray-200">
      <div className="container mx-auto px-3 sm:px-0 py-12 text-start sm:py-20">
        <div className="text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">مرافـقنـا</h2>
          <p className="sm:text-lg md:text-xl">يحتوي منتجعنـا على مجموعة من المرافـق عالية الجودة</p>
        </div>
        <div className="grid grid-cols-[repeat(2,minmax(0,160px))] sm:grid-cols-[repeat(3,minmax(0,250px))] justify-center mt-12 text-center gap-x-4 md:gap-x-20 lg:gap-x-28 gap-y-6 md:gap-y-16 xl:gap-x-36 xl:gap-y-20 text-main-gold-dark">
          <div>
            <FontAwesomeIcon icon={faShop} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4" />
            <h3 className="sm:text-xl font-semibold">سوبر ماركت داخل المنتجع مع إمكانية التوصيل مجانا</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faHotel} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4" />
            <h3 className="sm:text-xl font-semibold">فنادق وفلل خمس نجوم تناسب جميع الأذواق</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faDumpster} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4" />
            <h3 className="sm:text-xl font-semibold">مغسلة داخل المنتجع مع إمكانية التوصيل مجانا.</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faUtensils} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4" />
            <h3 className="sm:text-xl font-semibold">مطعم لتحضير وجبات الإفطار والغداء و العشاء</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faClockRotateLeft} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4" />
            <h3 className="sm:text-xl font-semibold">خدمة 24/7 فـي الساعــة علـى مدار اليوم</h3>
          </div>
          <div>
            <FontAwesomeIcon icon={faWaterLadder} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4" />
            <h3 className="sm:text-xl font-semibold">شاليهات خاصة تناسب الجميع وبأسعار تنافسية</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;