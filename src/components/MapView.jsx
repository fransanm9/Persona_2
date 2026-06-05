import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Corrige el bug de los iconos por defecto de Leaflet con Webpack/Vite
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Coordenadas de ejemplo (cámbialas por las de tu zona piloto)
const centro = [-33.45, -70.65];
const reportesSimulados = [
  { id: 1, posicion: [-33.448, -70.648], tipo: 'Colchón' },
  { id: 2, posicion: [-33.452, -70.653], tipo: 'Sofá' },
];

const MapView = () => {
  return (
    <div>
      <h1>Mapa de Reportes</h1>
      <MapContainer center={centro} zoom={14} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {reportesSimulados.map((rep) => (
          <Marker key={rep.id} position={rep.posicion}>
            <Popup>{rep.tipo}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;