import { useContext, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import { TrackerContext } from "../../core/context/trackerContext";

import { MarkerIcon } from "../../assets/images";

import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [35, 35],
});

export const GeoMap = () => {
  const context = useContext(TrackerContext);

  const Render = useCallback(() => {
    const position: [number, number] = [
      context?.tracker?.location?.lat || 0,
      context?.tracker?.location?.lng || 0,
    ];
    return (
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Your IP location</Popup>
        </Marker>
      </MapContainer>
    );
  }, [context?.tracker]);

  return <Render />;
};
