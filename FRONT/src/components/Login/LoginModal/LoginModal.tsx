import { useCallback, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Button from "../../Button/Button";
import Input from "../../Input";
import Modal from "../../Modal";
import { LoginContent, LoginImageContainer, LoginWrapper } from "./styles";

function LoginModal() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, token } = useAuth();

  const handleSubmit = useCallback(async () => {
    const data = signIn({
      login,
      senha: password,
    });

    return data;
  }, [signIn, login, password]);

  return (
    <>
      <Modal isOpen={token.length > 0 ? false : true}>
        <LoginWrapper>
          <LoginContent>
            <h2>Start to organize your job</h2>
            <p>Insert your credentials</p>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                handleSubmit();
              }}
            >
              <Input
                onChange={(event) => setLogin(event.target.value)}
                label="Login"
              />
              <Input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                label="Password"
              />
              <Button onClick={handleSubmit}>Login</Button>
            </form>
          </LoginContent>
          <LoginImageContainer>
            <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          </LoginImageContainer>
        </LoginWrapper>
      </Modal>
    </>
  );
}

export default LoginModal;
