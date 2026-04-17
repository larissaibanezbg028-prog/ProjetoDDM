import React, { createContext, useState } from 'react';

export const ConsultasContext = createContext();

export function ConsultasProvider({ children }) {
  const [consultas, setConsultas] = useState([
    {
      id: 1,
      nome: 'Ana Souza',
      data: '2026-04-18',
      horario: '09:00',
      tipo: 'Clínico Geral',
    },
    {
      id: 2,
      nome: 'Bruno Lima',
      data: '2026-04-19',
      horario: '14:30',
      tipo: 'Pediatria',
    },
    {
      id: 3,
      nome: 'Carla Mendes',
      data: '2026-04-20',
      horario: '11:15',
      tipo: 'Cardiologia',
    },
  ]);

  return (
    <ConsultasContext.Provider value={{ consultas, setConsultas }}>
      {children}
    </ConsultasContext.Provider>
  );
}
