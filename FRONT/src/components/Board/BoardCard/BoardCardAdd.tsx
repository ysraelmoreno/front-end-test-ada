import { useState } from "react";
import { useCard } from "../../../contexts/CardContext";
import Button from "../../Button/Button";
import Input from "../../Input";
import TextArea from "../../TextArea";
import { EBoardColumn } from "./BoardCard";
import { BoardCardContainer } from "./styles";

function BoardCardAdd() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addCard } = useCard();

  const handleCreateCard = async () => {
    await addCard({
      titulo: title,
      conteudo: content,
      lista: EBoardColumn.todo,
    });
  };

  return (
    <BoardCardContainer>
      <Input label="Title" onChange={(event) => setTitle(event.target.value)} />
      <TextArea
        label="Content"
        id="cardContent"
        onChange={(event) => setContent(event.target.value)}
      ></TextArea>

      <Button onClick={handleCreateCard}>Add</Button>
    </BoardCardContainer>
  );
}

export default BoardCardAdd;
