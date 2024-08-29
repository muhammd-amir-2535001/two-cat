'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import PortfolioCard from "./PortfolioCard";

const Reviews = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };

  return (
    <div>
      <Swiper
        slidesPerView={2}
        grid={{ rows: 2 }}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background: ${
              index === 0 ? "green" : "white"
            }; width: 26px; height: 10px; border-radius: 2px; margin: 4px;"></span>`;
          },
        }}
        modules={[Grid, Pagination]}
        breakpoints={breakpoints}
        className="reviewSwiper"
      >
        {[
          "/images/sec-2-cart-one.png",
          "/images/sec-2-cart-two.png",
          "/images/sec-2-cart-three.png",
          "/images/sec-2-cart-four.png",
          "/images/sec-2-cart-one.png",
          "/images/sec-2-cart-two.png",
          "/images/sec-2-cart-three.png",
          "/images/sec-2-cart-four.png",
          "/images/sec-2-cart-one.png",
          "/images/sec-2-cart-two.png",
          "/images/sec-2-cart-three.png",
          "/images/sec-2-cart-four.png",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <PortfolioCard
              img={img}
              title="Website Design"
              decriptation="Many Desktop Publishing"
              link="/"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
