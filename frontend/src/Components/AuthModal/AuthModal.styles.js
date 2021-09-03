import styled, { keyframes } from "styled-components";

const popup = keyframes`
    from{
        transform: scale(0.1);
    }
    to{
        transform: scale(1);
    }
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(28, 28, 28, 0.7);
  z-index: 110;
`;

export const ModalCont = styled.div`
  width: 30em;
  max-width: 95%;
  background-color: white;
  border-radius: 0.3em;
  overflow: hidden;
  animation: ${popup} 0.27s linear;
`;

export const Title = styled.div`
  display: flex;
  padding-inline: 1em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: auto;
  font-size: 22px;
  font-weight: 550;
  img {
    width: 1em;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: 3em;
`;

export const Email = styled.input`
  border: 1px solid grey;
  border-color: ${props => (!props.valid && props.email ? "red" : "green")};
  outline: none;
  width: 90%;
  font-size: 18px;
  padding: 0.5em;
  border-radius: 0.2em;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 95%;
  font-family: inherit;
  font-size: 1em;
  background-color: ${props => props.color};
  border: 1px solid;
  outline: none;
  padding-block: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  border-radius: 0.2em;
  cursor: pointer;
  border-color: ${props => (props.border ? "#dcdcdc" : "transparent")};
  img {
    width: 1.5em;
    margin-right: 1em;
    transform: ${props => (props.border ? "" : "rotateZ(180deg)")};
  }
`;
export const Footer = styled.div`
  margin-top: 1em;
  display: flex;
  margin-bottom: 1em;
`;

export const FooterLink = styled.span`
  color: #81c784;
  cursor: pointer;
`;
