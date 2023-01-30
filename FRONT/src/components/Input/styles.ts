import styled, { css } from "styled-components";

export interface ILabelContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Label = styled.label``;

export const LabelContainer = styled.div<ILabelContainerProps>`
  display: flex;
  position: absolute;
  display: flex;
  left: 10px;
  transition: all 0.2s ease;

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

export const InputWrapper = styled.div`
  border: 1px solid #ff8a00;
  position: relative;
  display: flex;
  border-radius: 5px;
  align-items: center;
  height: 40px;
  padding: 5px;
`;

export const InputContainer = styled.input`
  border: none;
  height: 35px;
  margin-top: 15px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
`;
