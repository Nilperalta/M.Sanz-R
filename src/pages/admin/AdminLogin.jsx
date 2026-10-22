import { useState } from "react";
import { loginAdmin } from "../../services/authService";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await loginAdmin(email, password);
    alert("Login de prueba. La autenticación real se conectará después.");
  }

  return (
    <main className="admin-page">
      <div className="admin-card">
        <p className="eyebrow">ADMIN</p>
        <h1>Acceso administrativo</h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Correo
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <button className="btn" type="submit">Ingresar</button>
        </form>
      </div>
    </main>
  );
}