import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { CarouselCont, Home2Cont, SwiperImage } from "./Home.styles";

SwiperCore.use([Navigation]);
function Home2() {
  const CarouselObj = [
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/NaanSq.jpg",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/Chinese.png",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/Curry+me+home..png",
      text: "Hi there how are ya?",
    },

    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/Uttar-ly.png",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/Heard+someone+say+Sattu+Paratha.png",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/We%E2%80%99re+serious+about+the+spices.png",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/best-seller.png",
      text: "Hi there how are ya?",
    },
    {
      image:
        "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/Where+Indian+food+tastes+better.png",
      text: "Hi there how are ya?",
    },
  ];
  return (
    <Home2Cont>
      <CarouselCont>
        <Swiper
          spaceBetween={50}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={4}
          className="mySwiperHome"
        >
          {CarouselObj.map((co, i) => {
            return (
              <SwiperSlide
                className="swiper-slide-home"
                style={{
                  maxWidth: "90%",
                  width: "10em",
                  height: "15em",
                  position: "relative",
                  cursor: "pointer",
                }}
                key={i}
              >
                <SwiperImage src={co.image} alt={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselCont>
    </Home2Cont>
  );
}

export default Home2;
