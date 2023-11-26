export interface TrackerI {
  ip: string;
  location: LocationI;
  as: AsI;
  isp: string;
}

export interface AsI {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface LocationI {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
