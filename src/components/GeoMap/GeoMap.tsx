import { useContext, useCallback } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { TrackerContext } from "../../core/context/trackerContext";

import "leaflet/dist/leaflet.css";

export const GeoMap = () => {
  const context = useContext(TrackerContext);

  const Render = useCallback(() => {
    const position = [
      context?.tracker?.location?.lat || 0,
      context?.tracker?.location?.lng || 0,
    ];
    return (
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    );
  }, [context?.tracker]);

  return <Render />;
};
