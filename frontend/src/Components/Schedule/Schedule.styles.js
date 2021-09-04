import styled from "styled-components";

export const ScheduleCont = styled.div`
  width: 70em;
  max-width: 95%;
  margin-inline: auto;
  margin-top: 2em;
`;

export const ScHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 1em;
  }
  .subtitle {
    opacity: 0.7;
  }
`;

export const SCard = styled.div`
  width: 60em;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(255, 255, 255);
  transition: all 0.3s;
  margin-block: 1em;
  padding: 1em;
  border-radius: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: rgb(232, 232, 232);
    box-shadow: rgb(28 28 28 / 12%) 0px 0.4rem 1.8rem;
  }
`;
export const ScLeft = styled.div`
  width: 14em;
  height: 12em;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-left: -5em;
  }
`;
export const ScRight = styled.div`
  display: flex;
  padding-block: 2em;
  flex-grow: 1;
  .l {
    display: flex;
    flex-direction: column;
    width: 75%;
    .name {
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .tg,
    .pr {
      margin-top: 1em;
      opacity: 0.6;
    }
    .rating {
      width: 3em;
      display: flex;
      background-color: #81c784;
      padding-inline: 0.2em;
      justify-content: space-around;
      border-radius: 1em;
      color: white;
      margin-top: 1em;
      img {
        width: 1em;
      }
    }
  }
  .r {
    display: flex;
    align-items: center;
    span {
      width: 8em;
      padding-block: 0.4em;
      background-color: #81c784;
      text-align: center;
    }
  }
`;

export const OuterSc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  .inner {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    span {
      margin-bottom: 0.2em;

      color: #81c784;
    }
    input {
      outline: none;
      padding: 0.5em;
      margin-bottom: 2em;
      border: 1px solid #81c784;
      border-radius: 0.3em;
      font-size: 1em;
    }
    button {
      font-family: inherit;
      width: 10em;
      margin: auto;
      margin-bottom: 4em;
      padding-block: 0.5em;
      background-color: #81c784;
      border: none;
      font-size: 1em;
      border-radius: 0.3em;
    }
  }
`;
