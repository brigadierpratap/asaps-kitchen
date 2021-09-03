import React from "react";
import { ModalBackdrop, ModalCont } from "./AuthModal.styles";

function AuthModal(props) {
  return (
    <ModalBackdrop onClick={e => props.backdrop()}>
      <ModalCont
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {props.children}
      </ModalCont>
    </ModalBackdrop>
  );
}

export default AuthModal;
