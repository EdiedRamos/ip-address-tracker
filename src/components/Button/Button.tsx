import { styled } from "styled-components";

export const Button = styled.button`
  width: 30px;
  height: var(--filter-height);
  border: none;
  padding: var(--filter-padding);
  border-radius: 0 var(--filter-radius) var(--filter-radius) 0;
  background-color: var(--dark);
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
