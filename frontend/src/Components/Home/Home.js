import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import asap from "../../Assets/Images/asap2.svg";
import PropTypes from "prop-types"; // ES6

import {
  HomeBottomCont,
  HomeOuterCont,
  HomeTopCont,
  HomeTopLeft,
  HomeTopRight,
  HTLHeaderRow,
  HTLRestRow,
} from "./Home.styles";
import DropDown from "../DropDown/DropDown";
import { withRouter } from "react-router-dom";

SwiperCore.use([Navigation, EffectFade]);

const Images = [
  {
    img: "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/images/1526750559.svg",
    title: "Home Cooked Meal",
    subtitle: "Because hey, nothing's like the taste of Home.",
  },
  {
    img: "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/images/1542510680.svg",
    title: "100% Assured Quality",
    subtitle: "We make sure that our consumers receive a top quality meal.",
  },
  {
    img: "https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/images/tracking.svg",
    title: "Live Tracking",
    subtitle:
      "We provide an accurate location of your food till it's on your plate!",
  },
];

function Home(props) {
  useEffect(() => {
    //if (localStorage.getItem("currLoc")) props.history.push("/home");
  }, []);
  return (
    <HomeOuterCont>
      <HomeTopCont>
        <HomeTopLeft
          data-aos="fade-right"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <HTLHeaderRow>
            <img src={asap} alt="logo" />
            <span onClick={props.setLoginModal} className="login">
              Log In
            </span>
            <span onClick={props.setSignUpModal} className="signup">
              Sign Up
            </span>
          </HTLHeaderRow>
          <HTLRestRow>
            <div className="upcnt">
              <h1>Life’s too short for boring food.</h1>
              <span className="subt">We’ve got something for everyone!</span>
            </div>
            <div className="search-cont">
              <DropDown color="#81c784" border="#81c784" noradius />
              <button>Locate</button>
            </div>
            <div className="desc">
              We are currently serving over <span>10,000</span> people in{" "}
              <span>20+</span> major cities across the country.
            </div>
          </HTLRestRow>
        </HomeTopLeft>
        <HomeTopRight
          data-aos="zoom-in-left"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img
            src="https://asapcloud.s3.ap-south-1.amazonaws.com/static_images/food_images/biryani1.jpg"
            alt="biryani"
          />
        </HomeTopRight>
      </HomeTopCont>
      <HomeBottomCont>
        <div className="inner">
          {Images.map((im, i) => (
            <div
              data-aos={`fade-${i === 0 ? "left" : i === 1 ? "down" : "right"}`}
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="800"
              className="card"
              key={i}
            >
              <img src={im.img} alt="Food" />
              <span className="title">{im.title}</span>
              <span className="subtitle">{im.subtitle}</span>
            </div>
          ))}
        </div>
      </HomeBottomCont>
    </HomeOuterCont>
  );
}
Home.propTypes = {
  setLoginModal: PropTypes.func.isRequired,
  setSignUpModal: PropTypes.func.isRequired,
};
export default withRouter(Home);
