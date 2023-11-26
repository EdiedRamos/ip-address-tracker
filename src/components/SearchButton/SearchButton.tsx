import { MouseEventHandler } from "react";
import { Button } from "..";
import { ArrowIcon } from "../../assets/images";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <img src={ArrowIcon} width="10px" />
    </Button>
  );
};
