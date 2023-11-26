import { styled } from "styled-components";

export const Separator = styled.div`
  display: none;
  position: relative;
  border: 1px solid lightgray;
  margin: 0 20px;

  @media (min-width: 995px) {
    display: inline-block;
  }
`;
