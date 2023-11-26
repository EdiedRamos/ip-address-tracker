import { styled } from "styled-components";

export const InfoContainer = styled.div`
  position: absolute;
  width: 90%;
  top: calc(250px - 90px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 8px;
  background-color: white;
  padding: 20px;
  z-index: 9999;

  @media (min-width: 775px) {
    top: calc(250px - 60px);
    flex-direction: row;
    width: auto;
  }
`;
