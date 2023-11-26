import { TrackerI } from "../../interfaces/trackerTypes";

// It could be save in a .env file but It's gonna be visible in the request so it doestn't matter. By the way, the api service is free.
const apiBase =
  "https://geo.ipify.org/api/v2/country,city?apiKey=at_QD2nQUye6tMFENOVYv7GtX3A0FQOB&ipAddress=IP_DIR";

export const Geo = {
  getInfoFromIp: (ip: string): Promise<TrackerI> =>
    new Promise((resolve, reject) => {
      fetch(apiBase.replace("IP_DIR", ip))
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }),
};
