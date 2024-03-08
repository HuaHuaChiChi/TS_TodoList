import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { ToDo, getToDos } from "../../../apis/todos";
import BaseButton from "../common/BaseButton";
import {
  useDeleteToDoMutation,
  useToggleToDoMutation,
} from "../../../util/hooks";

const TodoItem = ({ isDone }: { isDone: boolean }) => {
  const { isLoading, isError, data } = useQuery<ToDo[]>({
    queryKey: ["toDos"],
    queryFn: getToDos,
  });
  const { handleToggle } = useToggleToDoMutation();

  const { handleDelete } = useDeleteToDoMutation();

  if (isLoading) return null;
  const filteredToDos = data?.filter((item) => item.isDone === isDone) || [];

  return (
    <TodoCardContainer>
      {filteredToDos.map((item) => (
        <TodoCard key={item.id}>
          <TitleText>{item.title}</TitleText>
          <p>{item.content}</p>
          <p>{item.created}</p>
          {item.isDone ? (
            <ButtonWrap>
              <BaseButton onClick={() => handleToggle(item.id)}>
                취소
              </BaseButton>
              <BaseButton onClick={() => handleDelete(item.id)}>
                삭제
              </BaseButton>
            </ButtonWrap>
          ) : (
            <ButtonWrap>
              <BaseButton onClick={() => handleToggle(item.id)}>
                완료
              </BaseButton>
            </ButtonWrap>
          )}
        </TodoCard>
      ))}
    </TodoCardContainer>
  );
};

export default TodoItem;

const TodoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

const TodoCard = styled.div`
  height: 200px;
  width: 280px;
  border: 1px solid black;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleText = styled.p`
  font-size: 20px;
  margin-top: 15px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;
