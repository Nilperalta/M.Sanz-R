// Servicio preparado para autenticación.
// Todavía no está conectado a Firebase/Supabase.
// Aquí centralizaremos login, logout y comprobación de sesión.

export async function loginAdmin(email, password) {
  // TODO: conectar con Supabase Auth o Firebase Authentication.
  console.log("Login preparado:", email, password);
  return { success: true };
}

export async function logoutAdmin() {
  // TODO: cerrar sesión en el BaaS elegido.
}