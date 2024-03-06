import { useState } from "react";
import styled from "styled-components";
import { NewToDo, addToDos } from "../../../apis/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const addToDoMutation = useMutation({
    mutationFn: addToDos,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["toDos"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newToDo: NewToDo = {
      title,
      content,
      created: Date.now(),
      isDone: false,
    };
    addToDoMutation.mutate(newToDo);
  };

  return (
    <HeaderContainer>
      <StH1>TodoList</StH1>
      <StFrom onSubmit={handleSubmit}>
        <StInput
          placeholder="할 일 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></StInput>
        <StInput
          placeholder="할 일 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></StInput>
        <StButton>제출</StButton>
      </StFrom>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const StH1 = styled.h1`
  font-size: 50px;
`;

const StInput = styled.input`
  border-radius: 10px;
  height: 50px;
  width: 300px;
  margin-left: 10px;
  font-size: 30px;
`;

const StFrom = styled.form``;

const StButton = styled.button`
  margin-left: 10px;
  height: 50px;
  width: 70px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
`;
