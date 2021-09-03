import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavOuterContainer = styled.div`
  background-color: #81c784;
  width: 100%;
  font-family: "Poppins", sans-serif;
`;
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5em;
  max-width: 70em;
  margin-left: auto;
  margin-right: auto;
`;

export const NavLogo = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-inline: 1em;
  font-size: 1.6em;
  height: 100%;
  img {
    height: 100%;
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:hover {
      transform: scale(0.99);
    }
  }
`;

export const NavCollapse = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin-left: auto;
`;

export const NavLogin = styled.button`
  background-color: transparent;
  color: #000;
  width: 6em;
  margin-inline: 1em;
  border: none;
  font-size: 1em;
  padding-block: 0.6em;
  cursor: pointer;
  transition: all 0.1s;
  font-family: "Poppins", sans-serif;
  &:active,
  &:focus {
    border: 1px solid #ef5350;
    transform: scale(0.97);
  }
`;

export const Search = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-inline: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 1em;
`;
