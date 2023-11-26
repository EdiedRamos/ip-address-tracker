import { Wrapper, Input, SearchButton } from "../";
import { useSearch } from "./useSearch";

export const Search = () => {
  const { handleSubmit, handleChange, inputError } = useSearch();

  return (
    <Wrapper>
      <Input
        $hasError={inputError}
        onChange={handleChange}
        placeholder="Search for any IP address or domain"
      />
      <SearchButton onClick={handleSubmit} />
    </Wrapper>
  );
};
