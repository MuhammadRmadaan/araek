const req = require.context("../assets/images/chalets",false,/\.jpg$/)
const Chalets = () => {
  const galleryImages:any = req.keys().map(req)
  return ( 
    <>
    <div className="hidden sm:block w-full py-14 bg-main-gold-dark">
    </div>
    <section className="container sm:px-12 mx-auto px-3 py-0 pyy-12 sm:py-20 text-start -translate-y-36 sm:-translate-y-0">
      <div className="text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">شاليهات</h2>
        <p className="sm:text-lg md:text-xl">تمتع بالراحة والاسترخاء في شاليهات أرائك المجهزة بأحدث التقنيات والأجهزة الكهربائية، والأثاث المريح.</p>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {galleryImages.map((image:any,index:number)=>
            <img className="transition-all hover:col-span-2 sm:hover:col-span-1 sm:hover:scale-150  hover:shadow-lg" key={index} src={image} alt="Gallery" loading="lazy"/>
          )}
        </div>
    </section>
    </>
      
  );
}

export default Chalets;