import React from 'react'
import Container from './Container'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Clients = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16 px-4 sm:px-10">
    <Container>
    <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10">
      <div className="lg:w-1/2 flex flex-col gap-4">
        <div className="w-full">
          <img
            src="/images/section-three-img-one.png"
            alt="Client Meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#22A8C6] py-5 sm:p-10 lg:p-12 flex w-full flex-col items-center lg:items-start text-white text-center rounded-lg">
          <h2 className="text-[24px]  md:text-[38px] md:leading-[49px] text-white md:py-5 mb-4 w-full">
            <span className="flex items-center justify-center">
              What our clients
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
            and partners say
          </h2>
        
          <div className="flex gap-4 flex-row text-center items-center  w-full justify-center md:space-y-6 lg:space-y-0 md:lg:space-x-10 md:mt-6">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="font-poppins font-semibold text-lg lg:text-xl md:leading-[32.5px]">
                Peoples
              </p>
              <p className="font-bold text-2xl lg:text-5xl md:py-3 md:leading-[55px] md:tracking-tight">
                850+
              </p>
              <p className="font-poppins text-sm lg:text-base">
                is a long established
              </p>
            </div>
           
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="font-poppins font-semibold text-lg lg:text-xl leading-[32.5px]">
                Experience
              </p>
              <p className="font-bold text-2xl lg:text-5xl md:leading-[55px] md:tracking-tight md:py-3">
                300
              </p>
              <p className="font-poppins text-sm lg:text-base">
                is a long established
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side - Testimonial */}
      <div className="lg:w-1/2 flex flex-col items-start">
        {/* Testimonial Heading */}
        <div className="w-full">
          <h2 className="text-[22px] md:text-[49.02px] mb-4 text-left text-black leading-[55px] md:leading-[49px]  w-full max-w-3xl">
            <span className="flex items-start justify-start md:leading-8">
              What our clients
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
            and partners say
          </h2>
          {/* Testimonial Text */}
          <p className="text-[15px] md:text-[17.16px] leading-6 md:leading-10 text-[#000102] mb-4">
            We Focus At Every Stage On Effective Communication And Collaboration
            Between The Client And Ensuring That The Final Design Meets The
            Client's Objectives And Expectations.
          </p>
        </div>
        {/* Testimonial Box */}
        
        <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
                <div className="bg-gray-100 py-10 md:py-16 px-10 flex flex-col items-center lg:items-start text-center lg:text-left rounded-lg border border-gray-300">
          <div className="flex justify-around items-center w-full mb-4">
            {/* Navigation Buttons */}
            <button className="text-black hover:text-[#22A8C6] hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 2.293a1 1 0 010 1.414L7.414 8H17a1 1 0 110 2H7.414l4.879 4.879a1 1 0 11-1.414 1.414l-6.586-6.586a1 1 0 010-1.414l6.586-6.586a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full border-2 border-primary"
                src="/images/profile.png"
                alt="Client Photo"
              />
            </div>
            <button className="text-black hover:text-[#22A8C6] hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 17.707a1 1 0 010-1.414L12.586 12H3a1 1 0 010-2h9.586l-4.879-4.879a1 1 0 011.414-1.414l6.586 6.586a1 1 0 010 1.414l-6.586 6.586a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Testimonial Content */}
          <p className="font-poppins text-black font-normal text-[18px] leading-[32.5px] text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          {/* Client Image */}
          <div className="w-full flex items-center justify-center py-4 border border-custom-blue rounded-full text-center">
            <img
              src="/images/icons-three-secctionn.png"
              alt="Client"
              className="w-[34px] h-[24px] object-cover"
            />
          </div>
          {/* Client Details */}
          <div className="text-center lg:text-left w-full flex items-center justify-center flex-col">
            <h2 className="text-[24px] md:text-[30px] font-semibold text-[#000102] mb-2">
              Cameron Green
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#22A8C6] font-poppins">
              Client
            </p>
          </div>
        </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:top-[7rem] lg:left-[130px]"/>
      <CarouselNext className="lg:top-[7rem] lg:left-[400px]"/>
    </Carousel>

      </div>
    </div>
    </Container>
</section>

  )
}

export default Clients
