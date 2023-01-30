import styled from "styled-components";
import { BoardCardContainer } from "../BoardCard/styles";

export const BoardColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 10px 25px;
`;

export const BoardColumnTitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: #818181;
  margin-bottom: 20px;
  svg {
    margin-right: 5px;
  }
  h4 {
    font-weight: 400;
  }
`;

export const BoardColumnContent = styled.div`
  display: flex;
  flex-direction: column;

  ${BoardCardContainer} + ${BoardCardContainer} {
    margin-top: 10px;
  }
`;
