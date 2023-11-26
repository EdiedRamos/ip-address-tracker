import { styled } from "styled-components";

export const Separator = styled.div`
  display: none;
  position: relative;
  border: 1px solid lightgray;
  // height: 50px;
  margin: 0 20px;

  @media (min-width: 775px) {
    display: inline-block;
  }
`;
