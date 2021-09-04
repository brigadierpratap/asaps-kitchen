import { Link } from "react-router-dom";
import styled from "styled-components";

export const KitechenCardCont = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 21em;
  max-width: 95%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 1.5em;
  border: 1px solid rgb(255, 255, 255);
  margin-bottom: 1em;
  transition: all 0.3s;
  div > .offer {
    position: absolute;
    top: 2em;
    color: white;
    left: -2em;
    background-color: #81c784;
    transform: rotateZ(-45deg);
    width: 10em;
    text-align: center;
  }
  &:hover {
    border-color: rgb(232, 232, 232);
    box-shadow: rgb(28 28 28 / 12%) 0px 0.4rem 1.8rem;
  }
`;

export const KCardBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1em;

  .name {
    max-width: 90%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rating {
    width: 3em;
    display: flex;
    background-color: #81c784;
    padding-inline: 0.2em;
    justify-content: space-around;
    border-radius: 1em;
    color: white;
    img {
      width: 1em;
    }
  }
  .subtitle {
    font-size: 0.8em;
    opacity: 0.6;
    margin-top: -12px;
  }
  .estimate,
  .time {
    color: rgb(1, 1, 1, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      color: #81c784;
    }
  }
`;
export const Hr = styled.span`
  width: 99%;
  margin-inline: auto;
  height: 1px;
  margin-top: 1em;
  background-color: #e6e6e6;
`;
export const KCardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1.5em;
  transition: all 0.5s 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
