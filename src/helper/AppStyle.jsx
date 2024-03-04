import styled, { css } from "styled-components";
import DisplaySize from "./DisplaySize";

export const ContentDisplay = styled.div`
  width: 100%;
  max-width: ${DisplaySize.frame}px;
  display: flex;
  ${(props) =>
    props.type === "athletes" &&
    css`
      flex-direction: row;
    `}

  ${(props) =>
    props.type === "players" &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const FlexDisplay = styled.div`
  flex: 1;

  @media (max-width: ${DisplaySize.lg}px) {
    flex: ${({ sm }) => sm || 1};
  }
`;
