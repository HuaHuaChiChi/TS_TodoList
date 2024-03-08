import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ isDone }: { isDone: boolean }) => {
  return (
    <div>
      <Text>{isDone ? "완료됨" : "진행중"}</Text>
      <TodoListContainer>
        <TodoItem isDone={isDone} />
      </TodoListContainer>
    </div>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
`;

const Text = styled.h2`
  font-size: 40px;
  margin: 10px 0;
`;
