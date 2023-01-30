import React, { Dispatch } from "react";
import BoardCardAdd from "./BoardCardAdd";
import BoardCardEdit from "./BoardCardEdit";
import BoardCardList from "./BoardCardList";

type BoardType = "add" | "list" | "edit";

export enum EBoardColumn {
  todo = "todo",
  doing = "doing",
  done = "done",
}

interface BaseCard {
  type: BoardType;
  currentColumn: EBoardColumn;
}

export interface ListCard extends BaseCard {
  type: "list";
  title: string;
  content: string;
  id: string;
}

interface AddCard extends Omit<BaseCard, "currentColumn"> {
  type: "add";
}

export interface EditCard extends BaseCard {
  type: "edit";
  titleValue: string;
  contentValue: string;
  id: string;
  isInEditMode: boolean;
  handleEditMode: Dispatch<React.SetStateAction<boolean>>;
}

type IBoardCardProps = AddCard | ListCard | EditCard;

function BoardCard(props: IBoardCardProps) {
  if (props.type === "list") {
    return <BoardCardList {...props} />;
  }

  if (props.type === "edit" && props.isInEditMode) {
    return <BoardCardEdit {...props} />;
  }

  return <BoardCardAdd />;
}

export default BoardCard;
