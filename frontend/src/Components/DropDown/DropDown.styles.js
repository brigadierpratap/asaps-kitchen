import styled, { keyframes } from "styled-components";

const drop = keyframes`
    from {
        max-height: 0em;
    }

    to {
        max-height:10em;
    }
`;
export const DropDownContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const DropSearchContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const SearchPreIcon = styled.img`
  position: absolute;
  display: block;
  left: 1.5em;
  z-index: 10;
  transform: translateX(-50%);
  width: 1.4em;
`;
export const SearchPostIcon = styled.img`
  position: absolute;
  display: block;
  right: 0.3em;
  z-index: 10;
  width: 2em;
  cursor: pointer;
  transition: transform 0.3s linear;
  transform: ${props => (props.dropOpen ? "" : "rotateZ(-180deg)")};
`;
export const DropSearch = styled.input`
  width: 100%;
  border: ${props => (props.border ? "1px solid " + props.border : "none")};
  background-color: white;
  padding: 1rem;
  padding-left: 3em;
  position: relative;
  font-size: 1.1em;
  color: grey;
  transition: all 0.2s linear;
  border-radius: ${props => (props.noradius ? 0 : "0.3em")};
  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.22),
      0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80%;
  max-height: 15em;
  position: absolute;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  top: 115%;
  border-radius: 0.3em;
  z-index: 100;
  animation: ${drop} 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.22), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
`;

export const DropDownMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 0.7em;
  padding-block: 0.5em;

  max-height: 5em;
  cursor: pointer;

  .title {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
  }
  &:hover {
    background-color: rgb(248, 248, 248);
    .title {
      color: #81c784;
    }
  }
`;
