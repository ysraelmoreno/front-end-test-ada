import Board from "./components/Board";
import { AuthProvider } from "./contexts/AuthContext";
import { CardProvider } from "./contexts/CardContext";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <CardProvider>
        <Board />
      </CardProvider>
      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
