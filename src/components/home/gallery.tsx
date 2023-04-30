import image1 from "../../assets/images/slides/slide1.jpg"
import image2 from "../../assets/images/slides/slide2.jpg"
import image3 from "../../assets/images/slides/slide3.jpg"
import image4 from "../../assets/images/slides/slide4.jpg"
import image5 from "../../assets/images/slides/slide5.jpg"
import image6 from "../../assets/images/slides/slide6.jpg"
import image7 from "../../assets/images/slides/slide7.jpg"
import image8 from "../../assets/images/slides/slide1.jpg"
import image9 from "../../assets/images/slides/slide2.jpg"
const Gallery = () => {
  const galleryImages:any[] = [image1,image2,image3,image4,image5,image6,image7,image8,image9]
  return ( 
    <section id="gallery" className=" bg-gray-200">
      <div className="container mx-auto px-3 sm:px-0 py-12 text-start sm:py-20">
        <div className="text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">معرض الصور</h2>
          <p className="sm:text-lg md:text-xl">مجموعة صور لمختلف المرافق من منتجعنا</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {galleryImages.map((image,index)=>
            <img className="h-full transition-all hover:col-span-2 sm:hover:col-span-1 sm:hover:scale-150  hover:shadow-lg" key={index} src={image} alt="Gallery" loading="lazy"/>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;