import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const TodoItem = ({ isDone }: { isDone: boolean }) => {
  return <TodoCard>TodoItem</TodoCard>;
};

export default TodoItem;

const TodoCard = styled.div`
  height: 200px;
  width: 300px;
  background-color: green;
`;
