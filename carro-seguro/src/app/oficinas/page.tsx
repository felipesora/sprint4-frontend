"use client";

import React, { useEffect, useState } from 'react';
import { listarOficinas, Oficina } from '../../services/mecanico/api';

export default function Oficinas() {
  const [oficinas, setOficinas] = useState<Oficina[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const data = await listarOficinas();
        setOficinas(data);
      } catch {
        setErro("Erro ao carregar oficinas. Tente novamente mais tarde.");
      }
    };
    fetchOficinas();
  }, []);

  return (
    <div className='container_oficinas'>
      <h1>Oficinas Parceiras</h1>

      {erro ? (
        <p>{erro}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome da Oficina</th>
              <th>Endereço</th>
              <th>Zona</th>
            </tr>
          </thead>
          <tbody>
            {oficinas.map((oficina, index) => (
              <tr key={index}>
                <td>{oficina.nomeOficina}</td>
                <td>{oficina.enderecoOficina}</td>
                <td>{oficina.zonaMecanico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
