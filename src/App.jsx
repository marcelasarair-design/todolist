import { useState } from "react";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const agregar = () => {
    if (!texto.trim()) return;
    setTareas([...tareas, { id: Date.now(), texto, hecha: false }]);
    setTexto("");
  };

  const alternar = (id) =>
    setTareas(tareas.map(t => t.id === id ? { ...t, hecha: !t.hecha } : t));

  const eliminar = (id) => setTareas(tareas.filter(t => t.id !== id));

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>ToDoList</h1>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregar}>Agregar</button>
      <ul>
        {tareas.map(t => (
          <li key={t.id}>
            <span
              onClick={() => alternar(t.id)}
              style={{ textDecoration: t.hecha ? "line-through" : "none", cursor: "pointer" }}
            >
              {t.texto}
            </span>{" "}
            <button onClick={() => eliminar(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}