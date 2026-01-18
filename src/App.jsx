import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { AidstoneLayout, Navbar, Footer } from './themes/aidstone'
import Servicios from './pages/Servicios'
import SesionesCientificas from './pages/SesionesCientificas'
import Recertificacion from './pages/Recertificacion'
import GuiasConsensos from './pages/GuiasConsensos'
import ArticulosInteres from './pages/ArticulosInteres'
import CursosCongresos from './pages/CursosCongresos'
import Noticias from './pages/Noticias'
import Videos from './pages/Videos'
import ArticulosPropios from './pages/ArticulosPropios'
import SociedadesAmigas from './pages/SociedadesAmigas'
import Institucion from './pages/Institucion'
import Contacto from './pages/Contacto'

const ShellLayout = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-6">
      <Outlet />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AidstoneLayout />} />
        <Route element={<ShellLayout />}>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/sesiones-cientificas" element={<SesionesCientificas />} />
          <Route path="/servicios/recertificacion" element={<Recertificacion />} />
          <Route path="/servicios/guias-consensos" element={<GuiasConsensos />} />
          <Route path="/servicios/articulos-interes" element={<ArticulosInteres />} />
          <Route path="/servicios/cursos-congresos" element={<CursosCongresos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/noticias/articulos-interes" element={<ArticulosPropios />} />
          <Route path="/noticias/sociedades-amigas" element={<SociedadesAmigas />} />
          <Route path="/institucion" element={<Institucion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
