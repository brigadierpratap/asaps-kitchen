import styled from "styled-components";

export const HomeOuterCont = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;
`;

export const HomeTopCont = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeTopLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 4em;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0;
  }
`;
export const HTLHeaderRow = styled.div`
  max-width: calc(100% - 2em);
  margin-right: 2em;
  width: 40em;
  margin-left: auto;
  display: flex;
  align-items: center;
  img {
    width: 8em;
  }
  .login {
    margin-left: auto;
    margin-right: 1em;
    width: 7em;
    text-align: center;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: #81c784;
    }
  }
  .signup {
    width: 7em;
    text-align: center;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #81c784;
  }
  @media (max-width: 768px) {
    max-width: calc(100%);
    margin-right: auto;
  }
`;
export const HTLRestRow = styled.div`
  max-width: calc(100% - 2em);
  margin-right: 2em;
  width: 40em;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .upcnt {
    margin-bottom: 2.2em;
    h1 {
      margin-bottom: 0.4em;
      margin-top: 1.5em;
    }
    .subt {
      color: rgb(84 84 84 / 80%);
      margin-bottom: 1.2em !important;
    }
  }
  .search-cont {
    display: flex;
    width: 100%;
    margin-bottom: 2.2em;
    button {
      width: 8em;
      font-family: inherit;
      font-size: inherit;
      margin-left: -0.1em;
      background-color: #81c784;
      border: 1px solid #81c784;
      cursor: pointer;
    }
  }
  .desc {
    margin-top: 1em;
    color: rgba(1, 1, 1, 0.6);
    span {
      font-weight: 600;
      color: #81c784;
    }
  }

  @media (max-width: 768px) {
    max-width: calc(95%);
    margin-inline: auto;
  }
`;
export const HomeTopRight = styled.div`
  width: 50%;
  display: flex;
  img {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HomeBottomCont = styled.div`
  width: 100%;
  background-color: #81c784;
  display: flex;
  .inner {
    max-width: 100%;
    width: 70em;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    margin-bottom: 1em;
    .card {
      max-width: 95%;
      width: 20em;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 1em;
      img {
        max-width: 100%;
        width: 18em;
        margin-bottom: 1em;
      }
      .title {
        font-size: 1.1em;
        font-weight: 600;
      }
      .subtitle {
        opacity: 0.6;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const SwiperImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Home2Cont = styled.div`
  width: 100%;
`;

export const CarouselCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #171a29;
`;
export const CarouselText = styled.span`
  position: absolute;
  z-index: 500;
  color: white;
`;
