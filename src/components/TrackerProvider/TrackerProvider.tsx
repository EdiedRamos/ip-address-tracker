import React, { useState } from "react";

import { TrackerContext } from "../../core/context/trackerContext";
import { TrackerI } from "../../interfaces/trackerTypes";

type Props = {
  children: React.ReactNode;
};

type TrackerType = TrackerI | null;

export const TrackerProvider = ({ children }: Props): JSX.Element => {
  const [tracker, setTracker] = useState<TrackerType>(null);
  const [ip, setIp] = useState<string>("");

  const contextValue = {
    tracker,
    setTracker,
    ip,
    setIp,
  };

  return (
    <TrackerContext.Provider value={contextValue}>
      {children}
    </TrackerContext.Provider>
  );
};
