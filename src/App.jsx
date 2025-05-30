import styled from "styled-components";
import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { FlexMixin } from "./styles/styled";

const StyledSection = styled.section`
  ${FlexMixin("undefined", "center", "center", "20px", "wrap")}
  gap: 20px;
  padding: 20px;
`;

function App() {
  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
