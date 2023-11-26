import { createContext } from "react";
import type { TrackerI } from "../../../interfaces/trackerTypes";

type TrackerContextType = {
  tracker: TrackerI | null;
  setTracker: React.Dispatch<TrackerI>;
  ip: string;
  setIp: React.Dispatch<string>;
};

export const TrackerContext = createContext<TrackerContextType | null>(null);
