import styled from "styled-components";
import { ButtonContainer } from "../../Button/styles";
import { TextAreaWrapper } from "../../TextArea/styles";

export const BoardCardContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 15px;

  display: flex;
  flex-direction: column;

  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
  ${TextAreaWrapper} {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ${ButtonContainer} {
    align-self: flex-end;
  }
`;

export const BoardCardListContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  h1 {
    margin-bottom: 10px;
  }
`;

export const BoardCardEditIconContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-self: flex-end;

  svg {
    opacity: 0.4;
    transition: all 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

export const BoardCardMoveIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  svg {
    opacity: 1;

    transition: all 0.2s ease;

    &:hover {
      color: #ff8a00;
    }
  }
`;
