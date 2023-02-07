import { MapContainer, Marker, TileLayer } from "react-leaflet";

const center = { lat: 47.023262060006026, lng: 13.408998146700345 };

const markers = [
  { lat: 51.505, lng: -0.09 },
  { lat: 53.928731, lng: 27.59843 },
  { lat: 42.395, lng: 14.167 },
];

export const MapSection = () => {
  return (
    <MapContainer zoom={4} center={center} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </MapContainer>
  );
};
