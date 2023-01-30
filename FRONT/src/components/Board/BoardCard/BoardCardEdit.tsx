import { useState } from "react";
import { FiSlash, FiSave } from "react-icons/fi";
import { useCard } from "../../../contexts/CardContext";
import Input from "../../Input";
import TextArea from "../../TextArea";
import { EditCard } from "./BoardCard";
import { BoardCardContainer, BoardCardMoveIconsContainer } from "./styles";

function BoardCardEdit({
  contentValue,
  id,
  titleValue,
  handleEditMode,
  currentColumn,
}: Omit<EditCard, "type">) {
  const [titleEditedValue, setTitleEditedValue] = useState(titleValue);
  const [contentEditedValue, setContentEditedValue] = useState(contentValue);

  const { editCard } = useCard();

  const handleSaveEdit = async () => {
    await editCard({
      conteudo: contentEditedValue,
      id,
      lista: currentColumn,
      titulo: titleEditedValue,
    });

    handleEditMode(false);
  };

  return (
    <BoardCardContainer>
      <BoardCardMoveIconsContainer style={{ marginBottom: 20 }}>
        <FiSlash onClick={() => handleEditMode(false)} />
        <FiSave onClick={() => handleSaveEdit()} />
      </BoardCardMoveIconsContainer>
      <Input
        label="Title"
        onChange={(event) => setTitleEditedValue(event.target.value)}
        defaultValue={titleValue}
      />
      <TextArea
        label="Content"
        onChange={(event) => setContentEditedValue(event.target.value)}
        id="cardContent"
        defaultValue={contentValue}
      ></TextArea>
    </BoardCardContainer>
  );
}

export default BoardCardEdit;
