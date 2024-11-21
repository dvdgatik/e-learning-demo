import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AssetItem.css';

const AssetItem = ({ asset }) => {
  const [completed, setCompleted] = useState(localStorage.getItem(`completed-${asset.id}`) === 'true');

  const handleCompletionToggle = () => {
    const newCompletedState = !completed;
    setCompleted(newCompletedState);
    localStorage.setItem(`completed-${asset.id}`, newCompletedState ? 'true' : 'false');
    // Aquí podemos disparar una actualización de la lista de activos si se desea
    window.dispatchEvent(new Event('storage')); // Esto dispara el evento de almacenamiento
  };

  return (
    <div className="asset-item" role="listitem">
      <Link 
        to={`/asset/${asset.id}`} 
        className="asset-link" 
        aria-label={`Ver detalles de ${asset.title}`}
      >
        <div className="asset-image">
          <img 
            src={asset.thumbnail} 
            alt={asset.title ? `Vista previa de ${asset.title}` : 'Vista previa de activo'}
            className="asset-thumbnail" 
          />
        </div>
        <div className="asset-content">
          <h3>{asset.title}</h3>
          <p>{asset.description}</p>
          <span>{asset.type}</span>
        </div>
      </Link>

      <button
        className="complete-button"
        onClick={handleCompletionToggle}
        aria-pressed={completed} // Indica si el botón está activado (completado)
        aria-label={completed ? 'Desmarcar como completado' : 'Marcar como completado'} // Cambia el texto del botón según el estado
      >
        {completed ? 'Completado' : 'No Completado'}
      </button>
    </div>
  );
};

export default AssetItem;
