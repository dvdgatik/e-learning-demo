// src/components/AssetList/AssetList.jsx
import React, { useState, useEffect } from 'react';
import './AssetList.css';
import fakeData from '../../data/fakeData';
import AssetItem from '../AssetItem/AssetItem';

const AssetList = () => {
  const [completedAssets, setCompletedAssets] = useState([]);
  
  // Recuperar el estado de completado al cargar la página
  useEffect(() => {
    const updateCompletedAssets = () => {
      const completed = fakeData.filter((asset) =>
        localStorage.getItem(`completed-${asset.id}`) === 'true'
      );
      setCompletedAssets(completed);
    };

    updateCompletedAssets(); // Actualizamos el estado al montar el componente

    // Escuchamos cambios en localStorage (actualización si hay cambios)
    window.addEventListener('storage', updateCompletedAssets);

    // Limpiamos el listener al desmontar
    return () => {
      window.removeEventListener('storage', updateCompletedAssets);
    };
  }, []); // Solo al montar el componente

  // Calcular el progreso
  const calculateProgress = () => {
    return completedAssets.length / fakeData.lengthdddd;
  };

  return (
    <div className="asset-list">
      <h2>Lista de Activos</h2>

      {/* Barra de progreso */}
      <div className="progress-container">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${calculateProgress()}%` }} // Actualizamos el progreso dinámicamente
          ></div>
        </div>
        <p>{completedAssets.length} de {fakeData.length} completados</p>
      </div>

      {/* Lista de activos */}
      {fakeData.map((asset) => (
        <AssetItem
          key={asset.id}
          asset={asset}
        />
      ))}
    </div>
  );
};

export default AssetList;
