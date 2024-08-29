import React from 'react'
import Container from './Container'

const Hero = () => {
  return (
    
<div style={{ backgroundImage: 'url("/images/hero-background.png")' , backgroundPosition: "center" , backgroundRepeat: "no-repeat" ,backgroundSize: "cover" }} className='pt-20 pb-10'>
<Container>
<div className="mt-20 container md:gap-10 flex flex-col lg:py-10 md:flex-row md:justify-between  sm:px-4 px-4 items-center justify-between min-h-screen" >
  
  <main className="flex flex-col items-start justify-center text-left w-full max-w-[681px] space-y-4">
    
    <h2
      className="text-[#22A8C6] font-semibold tracking-[-0.82px] mb-[7px]
  text-[24px] leading-[28px] sm:text-[28px] sm:leading-[30px] md:text-[30px] md:leading-[34px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[44px]"
    >
      Grow Your Business With
    </h2>
    
    <h3
      className="text-white font-semibold tracking-[-0.82px] mb-[7px] Fixture
  
  text-[32px] leading-[32px] sm:text-[40px] sm:leading-[40px] md:text-[48px] md:leading-[48px] lg:text-[56px] lg:leading-[56px]"
    >
      The Best Web Design Company
      <img
        src="/images/sparkle.png"
        alt="Sparkle"
        className="inline-block h-[32px] sm:h-[40px] md:h-[48px] lg:h-[56px] w-auto"
      />
    </h3>
    
    <p className="text-white text-sm md:text-[18.39px] leading-[24px] md:leading-[36.77px] mt-4 py-10 ">
      Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
      natus error sit voluptatem laudantium, to Nemo enim ipsam voluptatem quia
      voluptas sit aspernatur.
    </p>
   
    <button
      className="bg-[#22A8C6] Fixture w-full max-w-[100vw] h-[60px] py-3 rounded-[70px] text-white mt-4 md:max-w-[230px] md:w-full
  "
    >
      Explore More
    </button>
  </main>

  <section className="w-full text-center rounded-[40px] py-4 px-6 bg-gray-900/30 border-t-[0.75px] border-b-[0.75px] border-l-[0.75px] border-r-[0px] border-gray-400 backdrop-blur-md mt-10 md:mt-0 ">
    <h2 className="text-white px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10 font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[30px] tracking-[-0.82px] mb-[7px] Fixture">
      Let's Talk About Your Project
    </h2>
    {/* Contact form */}
    <form id="contactForm" className="flex flex-col space-y-4 text-white">
      <input
        type="text"
        placeholder="Full Name*"
        className="w-full h-[60px] md:h-[70px] rounded-[20px] md:rounded-[30px] border-[0.5px] border-gray-400 px-[26px] bg-transparent text-white placeholder-[#FFFFFF]"
        required=""
      />
      <input
        type="email"
        placeholder="Email*"
        className="w-full h-[60px] md:h-[70px] rounded-[20px] md:rounded-[30px] border-[0.5px] border-gray-400 px-[26px] bg-transparent text-white placeholder-white"
        required=""
      />
      <input
        type="tel"
        placeholder="Telephone"
        className="w-full h-[60px] md:h-[70px] rounded-[20px] md:rounded-[30px] border-[0.5px] border-gray-400 px-[26px] bg-transparent text-white placeholder-white"
      />
      <textarea
        placeholder="Message"
        className="w-full h-[100px] md:h-[119px] rounded-[20px] md:rounded-[30px] border-[0.5px] border-gray-400 px-[25px] py-2 bg-transparent text-white placeholder-white"
        rows={4}
        defaultValue={""}
      />
      <button
        type="submit"
        className="w-full h-[50px] md:h-[60px] rounded-[20px] py-[18px] bg-[#22A8C6] text-white font-semibold text-[20px] leading-[24px]"
      >
        Submit
      </button>
    </form>
  </section>
 
</div>
</Container>
</div>

  )
}

export default Hero
