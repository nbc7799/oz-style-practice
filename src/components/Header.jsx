import styled, { ThemeProvider } from "styled-components";
import { FlexMixin } from "../styles/styled";
import { theme } from "../styles/theme";

const StyledHeader = styled.header`
  ${FlexMixin("row", "space-between", "center")}
  padding: 20px 20px;
  background-color: black;

  ul {
    ${FlexMixin("row", "center", "center", "20px")}

    li {
      ${({ theme }) => theme.font.mixin("16px", 400)}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <h1>OZ코딩스쿨</h1>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>내클래스</li>
        </ul>
      </StyledHeader>
    </ThemeProvider>
  );
}
