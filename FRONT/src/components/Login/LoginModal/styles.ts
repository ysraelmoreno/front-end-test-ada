import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  gap: 15px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    align-items: center;
  }
`;

export const LoginImageContainer = styled.div`
  height: 500px;

  img {
    max-width: 300px;
    height: 500px;
    object-fit: cover;
    border-radius: 0 5px 5px 0;
  }
`;
