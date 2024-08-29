import React from "react";
import Container from "./Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WorkingProcess = () => {
  return (
    <Container>
      <div className="px-4  flex justify-between items-center flex-col md:flex-row gap-4 py-10 md:py-20">
        <div className="w-full">
          <h2 className="text-[30.02px]  font-fixture pb-5 Fixture md:text-[30.02px] mb-4 text-left  text-black leading-[55px] md:leading-[49px] mt-8 md:mt-10 w-full ">
            <span
              className="font-fixture flex items-start justify-start md:leading-8 text-[30.02px] font-semibold leading-[55px] tracking-[-0.04em] text-left"
            >
              Our high-quality
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
            working processes
          </h2>
          <p className="text-[#000102] font-poppins pr-10 text-start text-[14px] sm:text-[18px] leading-[24px] sm:leading-[35.54px]">
            Here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br /> <br /> Injected humour, or randomised If you are
            going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="data-[state=open]:text-[#FAFDFE] data-[state=close]:text-black transition-all duration-700 border rounded-xl hover:shadow-2xl data-[state=open]:bg-[#22A8C6] mb-2"
            >
              <AccordionTrigger>
                <>
                  <div className="flex justify-start items-center gap-2">
                    <div className="bg-black font-fixture text-[#FAFDFE] text-[25.78px] flex items-center justify-center p-4 rounded-full data-[state=open]:bg-white data-[state=open]:text-[#22A8C6]">
                      01
                    </div>
                    <span className="pl-2 font-fixture text-[18px] sm:text-[30.78px] leading-[24px] sm:leading-[36.93px] tracking-[-0.04em] font-semibold">
                      Experts Dedication   
                    </span>
                  </div>
                </>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-20 w-3/4 pb-4 font-poppins text-[#FAFDFE] text-[14px] sm:text-[16.17px] leading-[24px] sm:leading-[36.37px] font-normal">
                  deserunt mollit anim id esSed ut perspiciatis unde omnis iste
                  natus error sit voluptatem.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="data-[state=open]:text-[#FAFDFE] data-[state=close]:text-black transition-all duration-700 border rounded-xl hover:shadow-2xl data-[state=open]:bg-[#22A8C6] mb-2"
            >
              <AccordionTrigger>
                <>
                  <div className="flex justify-start items-center gap-2">
                    <div className="font-fixture bg-black text-[#FAFDFE] text-[25.78px]  flex items-center justify-center p-4 rounded-full">
                      02
                    </div>
                    <span className="font-fixture pl-2 text-[18px] sm:text-[30.78px] leading-[24px] sm:leading-[36.93px] tracking-[-0.04em] font-semibold">
                      Experts Dedication
                    </span>
                  </div>
                </>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-20 font-poppins  w-3/4 pb-4 text-[#FAFDFE] text-[14px] sm:text-[16.17px] leading-[24px] sm:leading-[36.37px] font-normal">
                  deserunt mollit anim id esSed ut perspiciatis unde omnis iste
                  natus error sit voluptatem.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="data-[state=open]:text-[#FAFDFE] data-[state=close]:text-black transition-all duration-700 border rounded-xl hover:shadow-2xl data-[state=open]:bg-[#22A8C6] mb-2"
            >
              <AccordionTrigger>
                <>
                  <div className="flex justify-start items-center gap-2">
                    <div className="font-fixture bg-black text-[#FAFDFE] text-[25.78px]  flex items-center justify-center p-4 rounded-full">
                      03
                    </div>
                    <span className="font-fixture pl-2 text-[18px] sm:text-[30.78px] leading-[24px] sm:leading-[36.93px] tracking-[-0.04em] font-semibold">
                      Experts Dedication
                    </span>
                  </div>
                </>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-20 font-poppins w-3/4 pb-4 text-[#FAFDFE] text-[14px] sm:text-[16.17px] leading-[24px] sm:leading-[36.37px] font-normal">
                  deserunt mollit anim id esSed ut perspiciatis unde omnis iste
                  natus error sit voluptatem.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default WorkingProcess;
