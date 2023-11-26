import { styled } from "styled-components";

import { PatternMobile, PatternDesktop } from "../../assets/images";

export const BackgroundPattern = styled.div`
  width: 100%;
  height: 250px;
  background-color: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${PatternMobile});
  background-size: cover;

  @media (min-width: 375px) {
    background-image: url(${PatternDesktop});
  }
`;
