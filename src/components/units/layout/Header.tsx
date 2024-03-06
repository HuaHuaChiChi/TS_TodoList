import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <StH1>TodoList</StH1>
      <StFrom>
        <StInput placeholder="할 일 제목"></StInput>
        <StInput placeholder="할 일 내용"></StInput>
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
  align-items: center;
  justify-content: center;
`;

const StH1 = styled.h1`
  font-size: 50px;
`;

const StInput = styled.input`
  border-radius: 10px;
  height: 50px;
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
