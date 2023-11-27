import { useContext, useState, useEffect } from "react";
import type { MouseEventHandler, ChangeEventHandler } from "react";

import { Geo } from "../../services/api";
import { TrackerContext } from "../../core/context/trackerContext";
import { REGULAR_EXPRESSIONS } from "../../domain/utils/RegularExpressions";

export const useSearch = () => {
  const context = useContext(TrackerContext);
  const [inputError, setInputError] = useState<boolean>(false);

  const makeRequest = (ip: string) =>
    Geo.getInfoFromIp(ip)
      .then((res) => context?.setTracker(res))
      .catch((error) => console.warn({ error }));

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    if (!REGULAR_EXPRESSIONS.IP.test(context?.ip || "")) {
      setInputError(true);
      return;
    }
    setInputError(false);
    if (context?.ip) {
      makeRequest(context.ip);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputError(false);
    context?.setIp(event.target.value);
  };

  useEffect(() => {
    makeRequest("");
  }, []);

  return {
    handleSubmit,
    handleChange,
    inputError,
  };
};
