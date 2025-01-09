import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto

    // Lógica de validación del login
    if (username === "admin" && password === "admin") {
      onLoginSuccess(); // Llama a la función para marcar el login como exitoso
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password" // Sugerido por la advertencia
          />
        </div>
        <button type="submit">Iniciar sesión</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
