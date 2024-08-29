import React from "react";
import Container from "./Container";
import Reviews from "./Reviews";
import Image from "next/image";

const Portfolios = () => {
  return (
    <section
      className="py-20 bg-cover bg-black bg-center flex flex-col sm:flex-row min-h-screen items-center justify-center  px-4  sm:px-10"
      style={{
        backgroundImage: 'url("/images/background-color-section-two.png")',
      }}
    >
      <Container>
      <div className="w-full max-w-full mx-auto rounded-2xl">
        <div className="relative flex flex-col items-center justify-center w-full  px-4 mb-10 ">
          <h2 className="text-2xl md:text-[41px] mb-4 text-center font-fixture  text-white leading-[49px] md:leading-[49px]  w-full max-w-3xl">
            <span className="flex items-center justify-center font-fixture">
              Discover Our
              <svg
                width={45}
                height={45}
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M21.8996 0.533388C21.984 -0.177796 23.016 -0.177796 23.1005 0.533388L23.8084 6.49958C24.7225 14.2035 30.7965 20.2775 38.5004 21.1916L44.4665 21.8996C45.1778 21.984 45.1778 23.016 44.4665 23.1005L38.5004 23.8084C30.7965 24.7225 24.7225 30.7965 23.8084 38.5004L23.1005 44.4665C23.016 45.1778 21.984 45.1778 21.8996 44.4665L21.1916 38.5004C20.2775 30.7965 14.2035 24.7225 6.49958 23.8084L0.533388 23.1005C-0.177796 23.016 -0.177796 21.984 0.533388 21.8996L6.49958 21.1916C14.2035 20.2775 20.2775 14.2035 21.1916 6.49958L21.8996 0.533388Z"
                  fill="#22A8C6"
                />
              </svg>
            </span>
            Success Stories
          </h2>
          
          <div className="text-center font-poppins text-[#F8F8F8] mt-4 md:mt-6 text-base md:text-[18px] leading-6 md:leading-[27px] max-w-3xl">
            Explore our curated collection of successful projects.
          </div>
          <div className="absolute right-0">
        
            <Image
              className="rotate-[486.46deg] w-60 mx-auto hidden md:block"
              src="/images/hero-bottom-line.png"
              alt="Hero Bottom Line"
              width={100}
              height={100}
              
            />
          </div>
         
        </div>

        <div>
            <Reviews/>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default Portfolios;
