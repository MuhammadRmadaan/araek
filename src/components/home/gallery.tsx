const req = require.context("../../assets/images/gallery",false,/\.jpg$/)
const Gallery = () => {
  const galleryImages:any = req.keys().map(req)
  return ( 
    <section id="gallery" className=" bg-gray-200">
      <div className="container  sm:px-12 mx-auto px-3 py-12 text-start sm:py-20">
        <div className="text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">معرض الصور</h2>
          <p className="sm:text-lg md:text-xl">مجموعة صور لمختلف المرافق من منتجعنا</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {galleryImages.map((image:any,index:number)=>
            <img className="transition-all hover:col-span-2 sm:hover:col-span-1 sm:hover:scale-150  hover:shadow-lg" key={index} src={image} alt="Gallery" loading="lazy"/>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;