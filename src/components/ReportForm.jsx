import { useState } from 'react';

const tiposResiduo = ['Colchón 1 plaza', 'Colchón 2 plazas', 'Sofá 2 cuerpos', 'Escombro', 'Nevera'];

const ReportForm = () => {
  const [tipo, setTipo] = useState(tiposResiduo[0]);
  const [foto, setFoto] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const obtenerUbicacion = () => {
    if (!navigator.geolocation) {
      alert('Geolocalización no soportada');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUbicacion({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setMensaje('Ubicación capturada');
      },
      () => alert('No se pudo obtener la ubicación. Activa el GPS o ingresa manualmente.')
    );
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí después conectaremos con Supabase para guardar el reporte
    console.log('Reporte simulado:', { tipo, foto, ubicacion });
    alert('Reporte enviado (simulado). Revisa la consola.');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Reportar Residuo Voluminoso</h1>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Tipo de residuo: </label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            {tiposResiduo.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label>Foto del residuo: </label>
          <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files[0])} />
        </div>
        <div>
          <button type="button" onClick={obtenerUbicacion}>Usar mi ubicación</button>
          {ubicacion && <p>Ubicación: {ubicacion.lat.toFixed(5)}, {ubicacion.lng.toFixed(5)}</p>}
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Enviar reporte</button>
      </form>
    </div>
  );
};

export default ReportForm;