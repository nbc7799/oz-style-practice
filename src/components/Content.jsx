import styled, { ThemeProvider } from "styled-components";
import { FlexMixin } from "../styles/styled";
import { theme } from "../styles/theme";

const StyleContent = styled.div`
  ${FlexMixin("column", "start", "flex-start", "5px")}

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${({ theme }) => theme.font.mixin("12px")};
    color: ${({ theme }) => theme.colors.tag};
    border: 1px solid ${({ theme }) => theme.colors.tag};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${({ theme }) => theme.font.mixin("18px", 600)};
  }
  p {
    ${({ theme }) => theme.font.mixin("12px")};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default function Content({ content }) {
  return (
    <ThemeProvider theme={theme}>
      <StyleContent>
        <img src={content.img} alt={content.title} />
        <span>모집중</span>
        <div>{content.title}</div>
        <p>{content.subtitle}</p>
      </StyleContent>
    </ThemeProvider>
  );
}
