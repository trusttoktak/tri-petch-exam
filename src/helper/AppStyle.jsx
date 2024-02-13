import styled from "styled-components";
import DisplaySize from "./DisplaySize";

export const ContentDisplay = styled.div`
  width: 100%;
  max-width: ${DisplaySize.frame}px;
  display: flex;
  flex-direction: ${({ revert }) => (revert ? "row-reverse" : "row")};
`;

export const FlexDisplay = styled.div`
  flex: 1;

  @media (max-width: ${DisplaySize.lg}px) {
    flex: ${({ sm }) => sm || 1};
  }
`;
