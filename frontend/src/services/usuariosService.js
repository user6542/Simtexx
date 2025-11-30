const API_URL = import.meta.env.VITE_API_URL;

export async function getClientes() {
  try {
    const res = await fetch(`${API_URL}/usuarios/clientes`);
    if (!res.ok) throw new Error("Error al obtener clientes");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}


export async function getMantenedores() {
  try {
    const res = await fetch(`${API_URL}/usuarios/mantenedores`);
    if (!res.ok) throw new Error("Error al obtener responsables");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}


