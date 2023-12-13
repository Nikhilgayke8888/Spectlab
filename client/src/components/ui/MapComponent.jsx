
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function  ({ latitude, longitude })  {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '200px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A marker at latitude {latitude} and longitude {longitude}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};


