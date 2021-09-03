import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import {
  CarouselCont,
  Home2Cont,
  HomeTabsCont,
  KitchenCont,
  SwiperImage,
} from "./Home.styles";
import cutlery from "../../Assets/Images/cutlery.svg";
import KitchenCard from "../KitchenCard/KitchenCard";

SwiperCore.use([Navigation]);

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

function Home2() {
  const [activeTab, setActiveTab] = useState(0);

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
      <HomeTabsCont active={activeTab}>
        <div
          className="tab1"
          onClick={e => {
            setActiveTab(0);
          }}
        >
          <div className="inner">
            <img src={cutlery} alt="cutlery" /> <span>Kitchens</span>
          </div>
          <span className="border"></span>
        </div>
        <div
          className="tab2"
          onClick={e => {
            setActiveTab(1);
          }}
        >
          <div className="inner">
            <img src={cutlery} alt="schedule" /> <span>Schedule</span>
          </div>
          <span className="border"></span>
        </div>
      </HomeTabsCont>
      <KitchenCont>
        <KitchenCard
          kitchen={{
            name: "Pawan's Kitchen",
            id: "ghjgjfgg23asdsa",
            image:
              "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/images+(2).jpg",
            rating: "4.2",
            offer: "100",
            tags: "Punjabi,Marwadi",
            estimate: "100 for one",
            time: "45mins",
          }}
        />
        <KitchenCard
          kitchen={{
            name: "Pawan's Kitchen",
            id: "ghjgjfgg23asdsa",
            image:
              "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/images+(2).jpg",
            rating: "4.2",
            offer: "100",
            tags: "Punjabi,Marwadi",
            estimate: "100 for one",
            time: "45mins",
          }}
        />
        <KitchenCard
          kitchen={{
            name: "Pawan's Kitchen",
            id: "ghjgjfgg23asdsa",
            image:
              "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/images+(2).jpg",
            rating: "4.2",
            offer: "100",
            tags: "Punjabi,Marwadi",
            estimate: "100 for one",
            time: "45mins",
          }}
        />
        <KitchenCard
          kitchen={{
            name: "Pawan's Kitchen",
            id: "ghjgjfgg23asdsa",
            image:
              "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/images+(2).jpg",
            rating: "4.2",
            offer: "100",
            tags: "Punjabi,Marwadi",
            estimate: "100 for one",
            time: "45mins",
          }}
        />
      </KitchenCont>
    </Home2Cont>
  );
}

export default Home2;
