import { css } from "styled-components";

export const theme = {
  colors: {
    tag: "#d7fa00",
    gray: "rgb(160, 160, 160)",
  },
  font: {
    size: "12px",
    weight: 400,
    mixin: (size = "12px", weight = 400) => css`
      font-size: ${size};
      font-weight: ${weight};
    `,
  },
};
