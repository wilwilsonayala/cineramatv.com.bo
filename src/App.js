import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Noticias from "./pages/Noticias";
import Programacion from "./pages/Programacion";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import BannerForm from "./pages/BannerForm";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer"; // Importar el componente Footer

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        {/* Menú responsivo */}
        <ResponsiveAppBar />

        <Container>
          <main id="content">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/programacion" element={<Programacion />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route
                path="/login"
                element={<Login onLoginSuccess={handleLoginSuccess} />}
              />
              {isAuthenticated && (
                <Route path="/banner-form" element={<BannerForm />} />
              )}
            </Routes>
          </main>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
