import { InfoContainer, Information, Separator } from "..";

export const Result = () => {
  return (
    <InfoContainer>
      <Information title="IP ADDRESS" description="192.212.174.101" />
      <Separator />
      <Information title="LOCATION" description="Brooklyn, NY 10001" />
      <Separator />
      <Information title="TIMEZONE" description="UTC -05:00" />
      <Separator />
      <Information title="ISP" description="SpaceX Startlink" />
    </InfoContainer>
  );
};
