import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Table from 'antd/es/table';
import { useState } from 'react';
import { useGeolocation } from 'react-use';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 50px - 68px)',
  marginTop: '4px',
};

const defaultCenter = { lat: -27.3936291, lng: 152.9743977 };

const options = {
  disableDefaultUI: true,
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  maxZoom: 20,
  gestureHandling: 'cooperative',
  mapTypeId: 'roadmap',
  styles: [
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit.station.bus',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

const MapPage = () => {
  const [addresses, setAddresses] = useState<any>([]);

  const { latitude, longitude, loading: isLoadingLocation, error, heading } = useGeolocation();
  const center: { lat: number; lng: number } =
    isLoadingLocation || error ? defaultCenter : { lat: latitude!, lng: longitude! };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAWuB8zx2ieDSXqH3oTBuDUw9pcO_9HwlA',
  });

  const handleMapClick = (e: any) => {
    const address = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setAddresses([...addresses, address]);
  };

  const blueDot = {
    path: 'M 10 19 C 14.97 19 19 14.971 19 10 C 19 5.03 14.97 1 10 1 C 5.029 1 1 5.03 1 10 C 1 14.971 5.029 19 10 19 Z',
    fillColor: 'blue',
    fillOpacity: 0.7,
    strokeColor: 'white',
    strokeWeight: 2,
    scale: 0.5,
    size: window.google?.maps && new window.google.maps.Size(32, 32),
    anchor: window.google?.maps && new window.google.maps.Point(8, 8),
    origin: window.google?.maps && new window.google.maps.Point(0, 0),
    rotation: 0,
  };

  const columns = [
    {
      title: 'Latitude',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'Longitude',
      dataIndex: 'lng',
      key: 'lng',
    },
  ];

  const data = addresses.map((addr: any, i: number) => ({
    key: i,
    lat: addr.lat.toFixed(6),
    lng: addr.lng.toFixed(6),
  }));

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onClick={handleMapClick}
          options={options}
        >
          {latitude && longitude && (
            <Marker
              position={{ lat: latitude, lng: longitude }}
              icon={heading ? { ...blueDot, rotation: heading } : blueDot}
            />
          )}

          {addresses.map((addr: any) => (
            <Marker key={JSON.stringify(addr)} position={{ lat: addr.lat, lng: addr.lng }} />
          ))}
        </GoogleMap>
      ) : (
        'Loading...'
      )}
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default MapPage;
