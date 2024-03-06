import TodoItem from "./TodoItem";

const TodoList = ({ isDone }: { isDone: boolean }) => {
  return (
    <div>
      <h2>{isDone ? "완료됨" : "진행중"}</h2>
      <TodoItem isDone={isDone} />
    </div>
  );
};

export default TodoList;
