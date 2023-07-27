import { BoardContainer, BoardContent } from "./styles";
import { FiPlus, FiInbox, FiCheck, FiLoader } from "react-icons/fi";
import Header from "../Header";
import BoardColumn from "./BoardColumn";
import LoginModal from "../Login/LoginModal/LoginModal";
import { useMemo } from "react";
import BoardCard from "./BoardCard";
import { EBoardColumn } from "./BoardCard/BoardCard";
import { ICards, useCard } from "../../contexts/CardContext";

function Board() {
  const { cards } = useCard();

  const todoCards: ICards[] = useMemo(() => {
    const filteredCards = cards?.filter(
      (card) => card.lista === EBoardColumn.todo
    );

    return filteredCards;
  }, [cards]);

  const doingCards: ICards[] = useMemo(() => {
    const filteredCards = cards?.filter(
      (card) => card.lista === EBoardColumn.doing
    );

    return filteredCards;
  }, [cards]);

  const doneCards: ICards[] = useMemo(() => {
    const filteredCards = cards?.filter(
      (card) => card.lista === EBoardColumn.done
    );

    return filteredCards;
  }, [cards]);

  return (
    <BoardContainer>
      <Header />
      <BoardContent>
        <BoardColumn icon={FiPlus} title="Add new task">
          <BoardCard type="add"></BoardCard>
        </BoardColumn>
        <BoardColumn icon={FiInbox} title="Must Do">
          {todoCards.map((card) => (
            <BoardCard
              key={card.id}
              id={card.id}
              type="list"
              title={card.titulo}
              content={card.conteudo}
              currentColumn={card.lista}
            />
          ))}
        </BoardColumn>
        <BoardColumn icon={FiLoader} title="Doing">
          {doingCards.map((card) => (
            <BoardCard
              key={card.id}
              id={card.id}
              type="list"
              title={card.titulo}
              content={card.conteudo}
              currentColumn={card.lista}
            />
          ))}
        </BoardColumn>
        <BoardColumn icon={FiCheck} title="Done">
          {doneCards.map((card) => (
            <BoardCard
              id={card.id}
              key={card.id}
              type="list"
              title={card.titulo}
              content={card.conteudo}
              currentColumn={card.lista}
            />
          ))}
        </BoardColumn>
      </BoardContent>
      <LoginModal />
    </BoardContainer>
  );
}

export default Board;
