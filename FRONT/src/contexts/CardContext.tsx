import { AxiosError } from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { EBoardColumn } from "../components/Board/BoardCard/BoardCard";
import api, { Endpoints } from "../services/api";
import { useAuth } from "./AuthContext";

interface ICardContextData {
  cards: ICards[];
  setCards: Dispatch<SetStateAction<ICards[]>>;
  addCard: (card: Omit<ICards, "id">) => Promise<void>;
  moveCard: (moveCardData: IMoveCard) => Promise<void>;
  editCard: (card: ICards) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
}

interface IMoveCard {
  id: string;
  lista: EBoardColumn;
}

interface ICardProviderProps {
  children: React.ReactNode;
}

export interface ICards {
  id: string;
  titulo: string;
  conteudo: string;
  lista: EBoardColumn;
}

const CardContext = createContext<ICardContextData>({} as ICardContextData);

export const CardProvider = ({ children }: ICardProviderProps) => {
  const [cards, setCards] = useState<ICards[]>([]);

  const { token, clearToken } = useAuth();

  const editCard = async ({ id, conteudo, titulo, lista }: ICards) => {
    const editedCard = await api.put(
      `${Endpoints.CARDS}/${id}`,
      {
        id,
        conteudo,
        titulo,
        lista,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const filteredCards = cards.filter(
      (card) => card.id !== editedCard.data.id
    );

    setCards([...filteredCards, editedCard.data]);
  };

  const deleteCard = async (id: string) => {
    const remainingCards = await api.delete(`${Endpoints.CARDS}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCards(remainingCards.data);
  };

  const moveCard = async ({ id, lista }: IMoveCard) => {
    const findCard = cards.find((card) => card.id === id);

    const movedCard = await api.put(
      `${Endpoints.CARDS}/${id}`,
      {
        ...findCard,
        id,
        lista,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const filteredCards = cards.filter((card) => card.id !== movedCard.data.id);

    setCards([...filteredCards, movedCard.data]);
  };

  const addCard = async (card: Omit<ICards, "id">) => {
    const newCards = await api.post(Endpoints.CARDS, card, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCards([...cards, newCards.data]);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(Endpoints.CARDS, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCards(data);
      } catch (error: any) {
        const { response } = error as AxiosError<any>;

        if (response?.status === 401) {
          clearToken();
        }
      }
    })();
  }, []);
  return (
    <CardContext.Provider
      value={{ cards, editCard, setCards, moveCard, addCard, deleteCard }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);

  return context;
};
