import { styled } from "styled-components";

import { Subtitle, Text } from "..";

type InformationType = {
  title: string;
  description: string;
};

const InformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 5px;
  align-items: center;

  @media (min-width: 775px) {
    width: 170px;
    align-items: flex-start;
  }
`;

export const Information = ({
  title,
  description,
}: InformationType): JSX.Element => {
  return (
    <InformationStyled>
      <Subtitle>{title}</Subtitle>
      <Text>{description}</Text>
    </InformationStyled>
  );
};
