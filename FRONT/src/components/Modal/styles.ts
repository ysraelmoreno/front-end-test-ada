import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
`;

export const ModalContentContainer = styled.div`
  background-color: white;
  position: relative;
  min-width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
`;
