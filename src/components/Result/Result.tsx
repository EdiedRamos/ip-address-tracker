import { useContext } from "react";

import { InfoContainer, Information, Separator } from "..";
import { TrackerContext } from "../../core/context/trackerContext";

export const Result = () => {
  const context = useContext(TrackerContext);

  return (
    <InfoContainer>
      <Information
        title="IP ADDRESS"
        description={context?.tracker?.ip || "?"}
      />
      <Separator />
      <Information
        title="LOCATION"
        description={context?.tracker?.location.city || "?"}
      />
      <Separator />
      <Information
        title="TIMEZONE"
        description={`UTC ${context?.tracker?.location.timezone || "?"}`}
      />
      <Separator />
      <Information title="ISP" description={context?.tracker?.isp || "?"} />
    </InfoContainer>
  );
};
