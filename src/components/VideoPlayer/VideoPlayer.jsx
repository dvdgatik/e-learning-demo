import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl, videoId, onCompletionChange }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Recupera el tiempo guardado si el video no ha sido completado
    const savedTime = localStorage.getItem(`video-${videoId}`);
    if (savedTime) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
  }, [videoId]);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setCurrentTime(currentTime);
    localStorage.setItem(`video-${videoId}`, currentTime);
  };

  const handleVideoEnd = () => {
    // Al finalizar el video, marcarlo como completado
    localStorage.setItem(`completed-${videoId}`, 'true');
    setIsCompleted(true);
    
    // Llamar a la función onCompletionChange para actualizar el progreso
    onCompletionChange();
  };

  return (
    <div lang='es'>
      <video
        ref={videoRef}
        width="600"
        controls
        onTimeUpdate={handleTimeUpdate}
        aria-label="Reproductor de video"
        onEnded={handleVideoEnd} // Detecta cuando el video termina
        src={videoUrl}
        lang="es"
        type="video/mp4"
      >
        Tu navegador no soporta la etiqueta de video
      </video>
      <p>Duración: {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}</p>
      {isCompleted && <p tabIndex={0} aria-label={'Este video ha sido completado'}>¡Este video ha sido completado!</p>}
    </div>
  );
};

export default VideoPlayer;
