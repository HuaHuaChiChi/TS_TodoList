import Header from "../components/units/layout/Header";
import styled from "styled-components";
import TodoList from "../components/units/homeComponents/TodoList";

const Home = () => {
  return (
    <HomeContainer>
      <HomeItems>
        <Header />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </HomeItems>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 1200px;
  min-height: 400px;
  min-width: 600px;
  margin: auto;
`;

const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
`;
