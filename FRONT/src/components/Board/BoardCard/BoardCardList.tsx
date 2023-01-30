import BoardCard, { EBoardColumn, ListCard } from "./BoardCard";
import {
  BoardCardContainer,
  BoardCardEditIconContainer,
  BoardCardListContentContainer,
  BoardCardMoveIconsContainer,
} from "./styles";
import { FiArrowLeft, FiArrowRight, FiTrash, FiEdit3 } from "react-icons/fi";
import { useState } from "react";
import { useCard } from "../../../contexts/CardContext";

function BoardCardList({
  content,
  title,
  id,
  currentColumn,
}: Omit<ListCard, "type">) {
  const [isInEditMode, setIsInEditMode] = useState(false);

  const { moveCard, deleteCard } = useCard();

  if (isInEditMode) {
    return (
      <BoardCard
        id={id}
        type="edit"
        titleValue={title}
        contentValue={content}
        isInEditMode={isInEditMode}
        handleEditMode={setIsInEditMode}
        currentColumn={currentColumn}
      />
    );
  }

  const handleMoveCard = async (lista: EBoardColumn) => {
    await moveCard({
      id,
      lista,
    });
  };

  return (
    <BoardCardContainer>
      <BoardCardMoveIconsContainer>
        <FiArrowLeft
          onClick={() => {
            if (currentColumn === EBoardColumn.doing) {
              return handleMoveCard(EBoardColumn.todo);
            }

            handleMoveCard(EBoardColumn.doing);
          }}
        />

        <FiArrowRight
          onClick={() => {
            if (currentColumn === EBoardColumn.todo) {
              return handleMoveCard(EBoardColumn.doing);
            }

            handleMoveCard(EBoardColumn.done);
          }}
        />
      </BoardCardMoveIconsContainer>
      <BoardCardListContentContainer>
        <h1>{title}</h1>
        <p>{content}</p>
      </BoardCardListContentContainer>

      <BoardCardMoveIconsContainer>
        <FiTrash onClick={async () => deleteCard(id)} />
        <FiEdit3 onClick={() => setIsInEditMode(true)} />
      </BoardCardMoveIconsContainer>
    </BoardCardContainer>
  );
}

export default BoardCardList;
