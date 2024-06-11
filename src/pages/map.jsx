import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function Map() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    // Fungsi untuk mendapatkan posisi pengguna saat aplikasi dimuat
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error(error);
          // Penanganan kesalahan jika gagal mendapatkan posisi
        }
      );
    };

    // Panggil fungsi getLocation saat aplikasi dimuat
    getLocation();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <div className="flex flex-col flex-grow p-8 bg-gray-100">
          <div className="flex pb-4">
            <h1 className="text-4xl font-bold">Live Location</h1>
          </div>
          {/* MapContainer dengan TileLayer */}
          {currentPosition && (
            <MapContainer center={currentPosition} zoom={13} style={{ height: "400px" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Marker yang diperbarui secara real-time */}
              <Marker position={currentPosition}>
                <Popup>Posisi Anda</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
}

export default Map;
