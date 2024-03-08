import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { ToDo, deleteToDo, getToDos, toggleToDo } from "../../../apis/todos";

const useToggleToDoMutation = () => {
  const queryClient = useQueryClient();
  const ToggleToDoMutation = useMutation({
    mutationFn: toggleToDo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["toDos"] });
    },
  });
  const handleToggle = (id: string) => {
    ToggleToDoMutation.mutate(id);
  };
  return { handleToggle };
};

const TodoItem = ({ isDone }: { isDone: boolean }) => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery<ToDo[]>({
    queryKey: ["toDos"],
    queryFn: getToDos,
  });
  const { handleToggle } = useToggleToDoMutation();

  const deleteToDoMutation = useMutation({
    mutationFn: deleteToDo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["toDos"] });
    },
  });

  const handleDelete = (id: string) => {
    deleteToDoMutation.mutate(id);
  };

  if (isLoading) return null;
  const filteredToDos = data?.filter((item) => item.isDone === isDone) || [];

  return (
    <TodoCardContainer>
      {filteredToDos.map((item) => (
        <TodoCard key={item.id}>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <p>{item.created}</p>
          {item.isDone ? (
            <>
              <button onClick={() => handleToggle(item.id)}>취소</button>
              <button onClick={() => handleDelete(item.id)}>삭제</button>
            </>
          ) : (
            <button onClick={() => handleToggle(item.id)}>완료</button>
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
`;
