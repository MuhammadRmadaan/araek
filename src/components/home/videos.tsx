import "./home.css"
import footage1 from "../../assets/videos/footage1.mp4"
import footage2 from "../../assets/videos/footage1.mp4"
import footage3 from "../../assets/videos/footage1.mp4"
import footage4 from "../../assets/videos/footage1.mp4"
//import { useEffect } from "react"
const Videos = () => {
  const footages:any=[footage1,footage2,footage3,footage4]
  //const ifPlay=false
  
  // const [videos,setVideos]=useState(null as any)
  // setVideos(document.querySelectorAll(".footageVid"))
  
  // setTimeout(()=>{
    //   const videos2=Array.from(document.querySelectorAll(".footageVid"))
    //   console.log(videos2)
    // },10)
    // const videos:any=[]
    // useEffect(()=>{
    //   const videos=Array.from(document.querySelectorAll(".footageVid"))
    //   console.log(videos)
    // })
    
    const pauseAndResume=(index:any)=>{
      const videos=Array.from(document.querySelectorAll(".footageVid"))
      const footages=Array.from(document.querySelectorAll(".footage"))
      
      
      footages.forEach((footage)=>{
        if(footages.indexOf(footage)===index){
          //footage.classList.toggle("paused")
          footage.classList.toggle("after:content-['▸']")
          footage.classList.toggle("after:absolute")
          footage.classList.toggle("after:flex")
          footage.classList.toggle("after:items-center")
          footage.classList.toggle("after:justify-center")
          footage.classList.toggle("after:text-white")
          footage.classList.toggle("after:text-7xl")
          footage.classList.toggle("after:bg-black/50")
          footage.classList.toggle("after:h-full")
          footage.classList.toggle("after:w-full")
          footage.classList.toggle("after:top-0")
          footage.classList.toggle("after:cursor-pointer")
          
          videos.forEach((video:any)=>{
            if(videos.indexOf(video)===index){
              video.classList.toggle("paused")
              video.classList.toggle("playing")
              console.log(video.classList)
              if(video.classList.contains("playing"))
              video.play()
              else video.pause()
            }
          })
          
        }
      })
      //
    }
    
  return ( 
    <section
    id="videos"
    className="container mx-auto px-3 sm:px-0 py-12 text-start sm:py-20"
    >
      <div className="text-start text-main-gold-dark mb-6 md:mb-12 lg:mb-20">
        <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-">مقاطع الفيديو</h2>
        <p className="sm:text-lg md:text-xl">مجموعة لمختلف المرافق من منتجعنا</p>
      </div>
      <div id="Videos" className="videos grid gap-2 grid-cols-3 chirld-hover:col-span-3">
        {footages.map((footage:any,index:any)=>{
          return(
            <div className="footage paused after:content-['▸'] after:absolute after:flex after:items-center after:justify-center after:text-white after:text-7xl after:bg-black/50 after:h-full after:w-full after:top-0 after:cursor-pointer" key={index}  onClick={()=>pauseAndResume(index)}>
              <video className="footageVid h-full w-full paused">
                <source src={footage} />
              </video>
            </div>
            
          )
        })}
      </div>
    </section>
  );
}

export default Videos;