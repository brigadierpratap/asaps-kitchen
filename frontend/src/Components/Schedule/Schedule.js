import React, { useState } from "react";
import { connect } from "react-redux";
import {
  OuterSc,
  SCard,
  ScHeader,
  ScheduleCont,
  ScLeft,
  ScRight,
} from "./Schedule.styles";
import star from "../../Assets/Images/star.svg";
import AuthModal from "../AuthModal/AuthModal";
import { Title } from "../AuthModal/AuthModal.styles";
import cross from "../../Assets/Images/cross.svg";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { withRouter } from "react-router-dom";

function Schedule(props) {
  const [open, setopen] = useState(false);
  const [rest, setRest] = useState({});
  const [time, setTime] = useState("00:00");
  const [address, setaddress] = useState("");
  const [laoding, setlaoding] = useState(false);

  const handleSubmit = async () => {
    if (laoding) return;
    setlaoding(true);
    await fetch(process.env.REACT_APP_API_URL + "/placeOrder", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rest,
        time,
        address,
        price: 1000 * Math.random(),
        scheduled: true,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setlaoding(false);
        if (data.status === 1) {
          props.history.push("/orders");
        } else throw new Error();
      })
      .catch(e => {
        setlaoding(false);
      });
  };
  return (
    <ScheduleCont>
      <ScHeader>
        <span className="title">Hungry? </span>
        <span className="subtitle">Schedule your meal with us!</span>
      </ScHeader>
      {props.kitchens.info.map(kt => {
        return (
          <SCard key={kt.id} data-aos="fade-in-left" data-aos-duration="1000">
            <ScLeft>
              <img src={kt.proimg} alt="food" />
            </ScLeft>
            <ScRight>
              <div className="l">
                <span className="name">{kt.name}</span>
                <span className="tg">{kt.tags}</span>
                <span className="pr">{kt.price}</span>
                <span className="rating">
                  <img src={star} alt="star" />
                  {kt.rating}
                </span>
              </div>
              <div className="r">
                <span
                  onClick={e => {
                    setopen(true);
                    setRest(kt);
                  }}
                >
                  Schedule
                </span>
              </div>
            </ScRight>
          </SCard>
        );
      })}
      {open && (
        <AuthModal
          backdrop={() => {
            setopen(false);
          }}
        >
          <Title>
            Schedule{" "}
            <img
              src={cross}
              alt="cross"
              onClick={e => {
                setopen(false);
              }}
            />
          </Title>
          <OuterSc>
            <TimePicker
              onChange={e => {
                setTime(e);
              }}
              value={time}
              format="h:m:s a"
            />
            <div className="inner">
              <span>Address</span>
              <input
                value={address}
                onChange={e => {
                  setaddress(e.target.value);
                }}
                placeholder="Enter your full address"
              />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </OuterSc>
        </AuthModal>
      )}
    </ScheduleCont>
  );
}
const mapStateToProps = state => ({ kitchens: state.Kitchens });

export default withRouter(connect(mapStateToProps)(Schedule));
