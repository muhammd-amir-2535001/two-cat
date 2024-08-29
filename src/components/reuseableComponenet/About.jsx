import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-10 md:py-20">
      <Container>
        <div className="relative container flex flex-col md:flex-row items-center justify-between w-full min-h-screen">
          {/* Left Side */}
          <div className="flex flex-col items-start justify-center w-full md:w-1/3 h-full mb-8 md:mb-0">
            {/* Section Title */}
            <div className="text-[22.06px] text-black md:mb-12">
              Who We Are
            </div>
            {/* Left Image */}
            <div className="mt-10">
              <img
                src="/images/section-one-left-mg-one.png"
                alt="Left Image"
                className="w-full h-auto max-w-[284px] object-cover"
              />
            </div>
            {/* Decorative SVG */}
            <div className="px-4 py-2 md:px-10 md:py-6">
              <svg
                width={83}
                height={84}
                viewBox="0 0 83 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Black square */}
                <rect
                  width={56}
                  height={56}
                  transform="matrix(-1 0 0 1 83 0)"
                  fill="#000102"
                />
                {/* Blue square */}
                <rect
                  width={56}
                  height={56}
                  transform="matrix(-1 0 0 1 56 28)"
                  fill="#22A8C6"
                />
              </svg>
            </div>
          </div>
          {/* Center */}
          <div className="flex flex-col items-start justify-center w-full md:w-1/2 h-full px-4 md:px-8">
            {/* Section Heading with Decorative SVG */}
            <h2 className="text-[22px] md:text-[41px] Fixture font-semibold text-[#000102] mb-4">
              <span className="flex items-center Fixture">
                About the Two Cat
                {/* Decorative SVG */}
                <svg
                  width={45}
                  height={45}
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8996 0.533388C21.984 -0.177796 23.016 -0.177796 23.1005 0.533388L23.8084 6.49958C24.7225 14.2035 30.7965 20.2775 38.5004 21.1916L44.4665 21.8996C45.1778 21.984 45.1778 23.016 44.4665 23.1005L38.5004 23.8084C30.7965 24.7225 24.7225 30.7965 23.8084 38.5004L23.1005 44.4665C23.016 45.1778 21.984 45.1778 21.8996 44.4665L21.1916 38.5004C20.2775 30.7965 14.2035 24.7225 6.49958 23.8084L0.533388 23.1005C-0.177796 23.016 -0.177796 21.984 0.533388 21.8996L6.49958 21.1916C14.2035 20.2775 20.2775 14.2035 21.1916 6.49958L21.8996 0.533388Z"
                    fill="#22A8C6"
                  />
                </svg>
              </span>
              Designs
            </h2>
            {/* Section Description */}
            <p className="text-[15px] md:text-[17.16px] leading-6 md:leading-8 text-[#000102] mb-4 font-poppins">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            {/* Strategy Section */}
            <div className="flex justify-center items-start py-5">
              {/* Icon Container */}
              <div className="bg-[#22A8C6] w-16 h-10 py-3 px-2 flex items-center justify-center mr-4 rounded-full">
                <img
                  src="/images/arrow_right_alt.png"
                  alt="Arrow Right"
                />
              </div>
              {/* Text Content Container */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-[#000102] mb-2 Fixture">
                  Strategy
                </h3>
                <p className="text-sm text-[#000102] leading-6 mb-4 py-3 font-poppins">
                  deserunt mollit anim id est sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem. mollit anim id est sed ut
                  perspiciatis unde.
                </p>
              </div>
            </div>
            {/* Efficiency Section */}
            <div className="flex justify-center items-start py-5">
              {/* Icon Container */}
              <div className="bg-[#22A8C6] w-16 h-10 py-3 px-2 flex items-center justify-center mr-4 rounded-full">
                <img
                  src="/images/arrow_right_alt.png"
                  alt="Arrow Right"
                />
              </div>
              {/* Text Content Container */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-[#000102] mb-2 Fixture">
                  Efficiency
                </h3>
                <p className="text-sm text-[#000102] leading-6 mb-4 py-3 font-poppins">
                  deserunt mollit anim id est sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem. mollit anim id est sed ut
                  perspiciatis unde.
                </p>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex w-full md:w-1/3 h-full justify-center items-center">
            {/* Right Image */}
            <img
              src="/images/Rectangle-right.png"
              alt="Right Image"
              className="w-full h-auto max-w-[467px] max-h-[588px] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
