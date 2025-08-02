import React from "react";

const noticias = [
  { titulo: "Argentina gana la Copa", resumen: "Un partido épico decidido por penales." },
  { titulo: "Messi anuncia retiro", resumen: "Una era dorada llega a su fin." },
];

const tablaPosiciones = [
  { equipo: "River Plate", puntos: 42 },
  { equipo: "Boca Juniors", puntos: 39 },
  { equipo: "Racing", puntos: 35 },
];

const jugadoresDestacados = [
  { nombre: "Lionel Messi", posicion: "Delantero", goles: 28 },
  { nombre: "Emiliano Martínez", posicion: "Arquero", goles: 0 },
];

const cursos = [
  { nombre: "Tácticas Avanzadas", nivel: "Avanzado" },
  { nombre: "Fundamentos del Fútbol", nivel: "Inicial" },
];

function Header() {
  return (
    <header className="bg-green-700 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">⚽ Mundo Fútbol</h1>
      <p className="text-sm">Todo lo que necesitas para vivir el deporte más hermoso</p>
    </header>
  );
}

function Noticias() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-2">📰 Noticias recientes</h2>
      <ul className="space-y-2">
        {noticias.map((n, i) => (
          <li key={i} className="bg-gray-100 p-3 rounded shadow">
            <strong>{n.titulo}</strong>
            <p>{n.resumen}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Tabla() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-2">📊 Tabla de posiciones</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Equipo</th>
            <th className="border p-2">Puntos</th>
          </tr>
        </thead>
        <tbody>
          {tablaPosiciones.map((equipo, i) => (
            <tr key={i}>
              <td className="border p-2">{equipo.equipo}</td>
              <td className="border p-2 text-center">{equipo.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Jugadores() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-2">🌟 Jugadores destacados</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {jugadoresDestacados.map((j, i) => (
          <div key={i} className="bg-white p-4 border rounded shadow">
            <h3 className="text-lg font-bold">{j.nombre}</h3>
            <p>Posición: {j.posicion}</p>
            <p>Goles: {j.goles}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cursos() {
  return (
    <section className="p-4 bg-blue-50">
      <h2 className="text-xl font-semibold mb-2">🎓 Cursos de fútbol</h2>
      <ul className="space-y-2">
        {cursos.map((c, i) => (
          <li key={i} className="bg-white border-l-4 border-blue-400 p-3 shadow">
            <strong>{c.nombre}</strong> — <span className="italic">{c.nivel}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      <p>&copy; 2025 Mundo Fútbol. Todos los derechos reservados.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto">
        <Noticias />
        <Tabla />
        <Jugadores />
        <Cursos />
      </main>
      <Footer />
    </div>
  );
}
