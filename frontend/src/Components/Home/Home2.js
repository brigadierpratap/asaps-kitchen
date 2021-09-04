import React, { useEffect, useState } from "react";
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
  Loader,
  SwiperImage,
} from "./Home.styles";
import cutlery from "../../Assets/Images/cutlery.svg";
import schedule from "../../Assets/Images/schedule.svg";
import wBZ from "../../Assets/Images/wBZ.gif";

import KitchenCard from "../KitchenCard/KitchenCard";
import Schedule from "../Schedule/Schedule";
import { updateKitchenList } from "../../Redux/actions/ActionCreator";
import { connect } from "react-redux";

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

function Home2(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (props.kitchens.info.length === 0)
      getRestaurants().then(data => {
        console.log(data);
      });
    else {
      setRestaurants(props.kitchens.info);
      setLoading(false);
    }
  }, []);
  const getRestaurants = async () => {
    await fetch(process.env.REACT_APP_API_URL + "/restaurants?city=Allahabad", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 1) {
          setRestaurants(data.message);
          props.updateKitchens(data.message);
          setLoading(false);
        } else throw new Error();
      })
      .catch(e => {
        setRestaurants([]);
        setLoading(false);
      });
  };
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
            <img src={schedule} alt="schedule" /> <span>Schedule</span>
          </div>
          <span className="border"></span>
        </div>
      </HomeTabsCont>
      {activeTab === 0 && (
        <KitchenCont>
          {restaurants.length > 0 &&
            restaurants.map((re, i) => {
              return (
                <KitchenCard
                  kitchen={{
                    name: re.name,
                    id: re.id,
                    image: re.proimg,
                    rating: re.rating,
                    offer: re.offer,
                    tags: re.tags,
                    estimate: re.price,
                    time: "45mins",
                  }}
                  key={re.id}
                  ind={i}
                />
              );
            })}
        </KitchenCont>
      )}
      {activeTab === 1 && <Schedule />}
      {loading && (
        <Loader>
          <img src={wBZ} alt="" />
        </Loader>
      )}
    </Home2Cont>
  );
}
const mapDispatchToProps = dispatch => ({
  updateKitchens: data => dispatch(updateKitchenList(data)),
});
const mapStateToProps = state => ({ kitchens: state.Kitchens });
export default connect(mapStateToProps, mapDispatchToProps)(Home2);
