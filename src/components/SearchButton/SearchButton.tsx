import { Button } from "..";
import { ArrowIcon } from "../../assets/images";
import { Geo } from "../../services/api";

export const SearchButton = () => {
  return (
    <Button
      onClick={() => {
        Geo.getInfoFromIp("")
          .then((res) => console.log({ res }))
          .catch((error) => console.log({ error }));
      }}
    >
      <img src={ArrowIcon} width="10px" />
    </Button>
  );
};
