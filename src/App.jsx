import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReportForm from './components/ReportForm';
import MapView from './components/MapView';
import RecolectorDashboard from './components/RecolectorDashboard';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Reporte</Link>
        <Link to="/mapa" style={{ marginRight: '1rem' }}>Mapa</Link>
        <Link to="/recolector" style={{ marginRight: '1rem' }}>Recolector</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ReportForm />} />
        <Route path="/mapa" element={<MapView />} />
        <Route path="/recolector" element={<RecolectorDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;