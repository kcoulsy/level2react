import React, { Component } from "react";
import styled from "styled-components";

import Portal from "./Portal";

export default class Model extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>Close</CloseButton>
              {children}
            </ModalCard>
            <ModalBackground onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.3;
  background: black;
`;
const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 2px;
  min-width: 320px;
  padding: 10px;
  z-index: 10;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
