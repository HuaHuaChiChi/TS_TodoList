import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { ToDo, getToDos } from "../../../apis/todos";

const TodoItem = ({ isDone }: { isDone: boolean }) => {
  const { isLoading, isError, data } = useQuery<ToDo[], Error>({
    queryKey: ["toDos"],
    queryFn: getToDos,
  });
  if (isLoading) return null;
  const filteredToDos = data?.filter((item) => item.isDone === isDone) || [];

  return (
    <TodoCardContainer>
      {filteredToDos.map((item) => (
        <TodoCard>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>{item.created}</p>
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
`;
