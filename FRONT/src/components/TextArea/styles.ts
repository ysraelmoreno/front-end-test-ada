import styled, { css } from "styled-components";
import { ILabelContainerProps } from "../Input/styles";

export const TextAreaContainer = styled.textarea`
  border: none;
  width: 100%;
  margin-top: 10px;
  height: 100%;
`;

export const TextAreaWrapper = styled.div`
  border: 1px solid #ff8a00;
  padding: 10px;
  border-radius: 5px;
`;

export const TextAreaLabel = styled.label<ILabelContainerProps>`
  position: absolute;
  transition: all 0.2s ease;

  font-family: "Fira Sans";
  ${(props) =>
    props.isFocused &&
    css`
      transform: translateY(-55%) translateX(-10px) scale(0.7);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      transform: translateY(-55%) translateX(-10px) scale(0.7);
    `}
`;
