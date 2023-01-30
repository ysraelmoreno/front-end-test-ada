import { IconBaseProps } from "react-icons";
import {
  BoardColumnContainer,
  BoardColumnContent,
  BoardColumnTitleContainer,
} from "./styles";

interface IBoardColumnProps {
  children: React.ReactNode;
  icon?: React.ComponentType<IconBaseProps>;
  title: string;
}

function BoardColumn({ children, icon: Icon, title }: IBoardColumnProps) {
  return (
    <>
      <BoardColumnContainer>
        <BoardColumnTitleContainer>
          {Icon && <Icon />}
          <h4>{title}</h4>
        </BoardColumnTitleContainer>

        <BoardColumnContent>{children}</BoardColumnContent>
      </BoardColumnContainer>
    </>
  );
}

export default BoardColumn;
