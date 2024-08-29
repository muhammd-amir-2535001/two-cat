import React from "react";
import Container from "./Container";

const OurUsers = () => {
  return (
    
      <div
        className="w-full  mx-auto sm:pt-10  bg-black bg-cover bg-center lg:py-5 relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/background-two22.png")',
        }}
      >
        <Container>
        <div className=" w-full h-full flex flex-col sm:flex-row items-center justify-between py-10 md:py-20">
          {/* Text Content */}
          <div className="md:pl-8 lg:pl-0 flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-1/2 h-full justify-center">
            {/* Subheading */}
            <h2 className="text-[22px] md:text-[41px] mb-2  Fixture  font-semibold text-white leading-[49px] mt-8 md:mt-10">
              <span className="flex font-fixture items-center justify-center sm:justify-start md:text-[49.02px] text-[30.02px] font-semibold leading-[55px] tracking-[-0.04em]">
                Our Clients
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
            </h2>
            {/* Paragraph */}
            <p
              className="text-[#F8F8F8] text-[18px] mt-4 md:mt-6 leading-[32.5px] md:text-[22px]  md:leading-[32.5px] md:max-w-xl max-w-[40%] py-4 font-normal"
            >
              We’ve helped over 200+ startups grow their business around the
              world
            </p>
          </div>
          {/* Logos */}
          <div className="px-2 md:px-0 w-full flex flex-wrap  items-center justify-center  gap-4 mt-8 sm:mt-0 h-full">
            <img
              src="/images/log-ineer-one.png"
              alt="Logo 1"
              className="w-[100px] sm:w-auto  ..."
            />
            <img
              src="/images/logo-ineer-two.png"
              alt="Logo 2"
              className="w-[100px] sm:w-auto  ..."
            />
            <img
              src="/images/logo-ineer-three.png"
              alt="Logo 3"
              className="w-[100px] sm:w-auto  ..."
            />
            <img
              src="/images/logo-ineer-four.png"
              alt="Logo 4"
              className="w-[100px] sm:w-auto  ..."
            />
            <img
              src="/images/logo-ineer-two.png"
              alt="Logo 2"
              className="w-[100px] sm:w-auto  ..."
            />
            <img
              src="/images/logo-ineer-six.png"
              alt="Logo 6"
              className="w-[100px] sm:w-auto  ..."
            />
          </div>
        </div>
        </Container>
      </div>
    
  );
};

export default OurUsers;
