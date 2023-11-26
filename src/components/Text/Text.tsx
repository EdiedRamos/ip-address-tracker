import { styled } from "styled-components";

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  overflow-wrap: break-word;
  width: 100%;

  @media (min-width: 775px) {
    text-align: left;
  }
`;
