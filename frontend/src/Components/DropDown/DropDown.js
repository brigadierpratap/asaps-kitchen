import React, { useEffect, useState } from "react";
import {
  DropDownContainer,
  DropDownMenu,
  DropDownMenuItem,
  DropSearch,
  DropSearchContainer,
  SearchPostIcon,
  SearchPreIcon,
} from "./DropDown.styles";
import locationMarker from "../../Assets/Images/locationMarker.svg";
import caret from "../../Assets/Images/caretUp.svg";
import IndianCities from "../../Assets/Data/indiaCities.json";
import { withRouter } from "react-router-dom";

function DropDown(props) {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [dropOptions, setDropOptions] = useState([{ autoLocation: true }]);
  const [search, setSearch] = useState(
    localStorage.getItem("currLoc") === null
      ? ""
      : localStorage.getItem("currLoc")
  );
  const handleDocClick = () => {
    setIsDropOpen(false);
    // console.log(IndianCities);
  };

  //Search Cities
  const searchCities = key => {
    var res = IndianCities.filter(
      c => c.name.includes(key) || c.name.includes(key.toUpperCase())
    );
    res = res.sort((a, b) => a.name > b.name);
    setDropOptions([...res, { autoLocation: true }]);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocClick);
    return () => {
      document.removeEventListener("click", null);
    };
  }, []);
  return (
    <DropDownContainer onClick={e => e.stopPropagation()}>
      <DropSearchContainer>
        <SearchPreIcon src={locationMarker} alt="marker" />
        <DropSearch
          type="text"
          placeholder="Location"
          onFocus={e => setIsDropOpen(true)}
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            if (search.length >= 3) {
              searchCities(search);
            }
          }}
          border={props.border}
          noradius={props.noradius}
        />
        <SearchPostIcon
          src={caret}
          alt="caret"
          dropOpen={isDropOpen}
          onClick={e => {
            setIsDropOpen(prev => !prev);
          }}
        />
      </DropSearchContainer>
      {isDropOpen && (
        <DropDownMenu>
          {dropOptions.map(dropOp => {
            if (dropOp.autoLocation) {
              return (
                <DropDownMenuItem color={props.color} key={"auto"}>
                  <span className="title">Detect Current Location</span>
                  <span className="subtitle">Using gps</span>
                </DropDownMenuItem>
              );
            } else {
              return (
                <DropDownMenuItem
                  color={props.color}
                  key={dropOp.name + dropOp.stateName}
                  onClick={e => {
                    setSearch(dropOp.name);
                    localStorage.setItem("currLoc", dropOp.name);
                    props.history.push("/home");
                    setIsDropOpen(false);
                  }}
                >
                  <span className="title">{dropOp.name}</span>
                  <span className="subtitle">{dropOp.stateName}</span>
                </DropDownMenuItem>
              );
            }
          })}
        </DropDownMenu>
      )}
    </DropDownContainer>
  );
}

export default withRouter(DropDown);
