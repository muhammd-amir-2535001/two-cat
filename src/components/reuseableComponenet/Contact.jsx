import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <section
      className="relative bg-black py-12 sm:py-16 px-4 sm:px-10 flex items-center justify-center"
      style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
    >
      <Container>
        <div className="container flex flex-col lg:py-10 lg:mt-10 md:flex-row md:justify-between sm:mt-6 sm:px-4 items-center">
          <main className="flex flex-col items-start justify-center text-left w-full lg:max-w-[50%]">
            <h3 className="text-white Fixture font-semibold text-[8vw] sm:text-[56px] leading-[8vw] sm:leading-[56px] tracking-[-0.82px] mb-[7px]">
              <span>
                Let's start a
                <img
                  src="/images/sparkle.png"
                  alt="Sparkle"
                  className="inline-block h-[56px] w-auto"
                />
              </span>
              <br />
              project together
            </h3>
            <p className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[24px] lg:leading-[36px] text-white mt-4 sm:mt-6 md:mt-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="w-full flex justify-center mt-6 md:mt-0 ">
              <img
                src="/images/hero-bottom-line.png"
                alt=""
                className="w-[254px] sm:w-[325px] h-auto transform -rotate-[160.94°]"
              />
            </div>
          </main>
          {/* Form Section */}
          <section className="w-full lg:max-w-[50%] text-left px-4 sm:px-6 md:px-8 mt-8 md:mt-0">
            <div className="mb-6">
              <h4 className="text-white text-[20px] sm:text-[24px] leading-[24px] sm:leading-[28px] font-semibold">
                Send us a Message
              </h4>
            </div>
            <form id="contactForm" className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full h-[50px] sm:h-[60px] md:h-[70px] rounded-[20px] md:rounded-[30px] border border-white px-[20px] md:px-[26px] bg-transparent text-white placeholder-white "
                required=""
              />
              <input
                type="email"
                placeholder="Your Email address*"
                className="w-full h-[50px] sm:h-[60px] md:h-[70px] rounded-[20px] md:rounded-[30px] border border-white px-[20px] md:px-[26px] bg-transparent text-white placeholder-white "
                required=""
              />
              <input
                type="tel"
                placeholder="(654) 825-4655"
                className="w-full h-[50px] sm:h-[60px] md:h-[70px] rounded-[20px] md:rounded-[30px] border border-white px-[20px] md:px-[26px] bg-transparent text-white placeholder-white "
              />
              <textarea
                placeholder="Write your Message here..."
                className="w-full h-[80px] sm:h-[100px] md:h-[119px] rounded-[20px] md:rounded-[30px] border border-white px-[20px] md:px-[25px] py-4 md:py-6 bg-transparent text-white placeholder-white "
                rows={4}
                defaultValue={""}
              />
              <button
                type="submit"
                className="w-full h-[40px] sm:h-[50px] md:h-[60px] rounded-[20px] md:rounded-[30px] py-[10px] sm:py-[14px] md:py-[18px] bg-[#22A8C6] text-white text-[16px] sm:text-[18px] md:text-[20px] "
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
