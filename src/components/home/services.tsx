import service1 from "../../assets/images/slides/slide3.jpg"
import service2 from "../../assets/images/slides/slide5.jpg"
import service3 from "../../assets/images/slides/slide6.jpg"
const Services = () => {
  return ( 
  <section
    id="services"
    className="container sm:px-12 mx-auto px-3 py-0 pyy-12 sm:py-20 text-start -translate-y-36 sm:-translate-y-0"
  >
    <div className="text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
      <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">خدماتُنـــا</h2>
      <p className="sm:text-lg md:text-xl">يقدم منتجعنا السياحي خدمات متنوعة تلبي احتياجات <br /> زواره الكرام، حيث تشمل هذه الخدمات</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,minmax(0,350px))] gap-y-12 sm:gap-3 md:gap-6 lg:gap-12 justify-center child:cursor-pointer child-hover:scale-105 child-hover:shadow-md px-2 sm:px-0">
      <a className="rounded-3xl bg-main-gold transition duration-300" href="/chalets">
        <img src={service1} alt="service1" className=" w-full object-fill rounded-t-3xl" loading="lazy" />
        <div className="p-4 text-white">
          <h3 className="font-semibold text-3xl mb-2">شاليهات</h3>
          <p className="text-xl">تمتع بالراحة والاسترخاء في شاليهات أرائك المجهزة بأحدث التقنيات والأجهزة الكهربائية، والأثاث المريح.</p>
        </div>
      </a>
      <a className="rounded-3xl bg-main-gold transition duration-300 sm:scale-110 sm:hover:!scale-[1.15]" href="/villas">
        <img src={service2} alt="service1" className=" w-full object-fill rounded-t-3xl" loading="lazy" />
        <div className="p-4 text-white">
          <h3 className="font-semibold text-3xl mb-2">فـلل</h3>
          <p className="text-xl">تتميز فيلاتنا بمساحات واسعة وتصميم داخلي رائع، وتتضمن جميع المرافق الحديثة التي تلبي جميع احتياجات الزائرين.</p>
        </div>
      </a>
      <a className="rounded-3xl bg-main-gold transition duration-300" href="/hotelrooms">
        <img src={service3} alt="service1" className=" w-full object-fill rounded-t-3xl" loading="lazy" />
        <div className="p-4 text-white">
          <h3 className="font-semibold text-3xl mb-2">غـرف فندقـيـة</h3>
          <p className="text-xl">تتوفر فيها جميع الخدمات الفندقية الراقية. تحتوي على غرف نوم فسيحة ومطابخ صغيرة وأماكن جلوس مريحة.</p>
        </div>
      </a>
    </div>
  </section> 
  );
}

export default Services;