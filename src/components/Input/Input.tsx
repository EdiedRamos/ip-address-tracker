import { styled } from "styled-components";

export const Input = styled.input`
  width: 230px;
  height: var(--filter-height);
  padding: var(--filter-padding);
  outline: none;
  border: none;
  border-radius: var(--filter-radius) 0 0 var(--filter-radius);
  font-size: 18px;

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 1000px) {
    width: 500px;
  }
`;
