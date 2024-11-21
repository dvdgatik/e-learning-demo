// src/components/Podcast/Podcast.jsx
import React, { useRef, useState } from "react";
import "./Podcast.css";

const Podcast = ({ podcast }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div tabIndex={0} aria-label={`Seccion de Podcast, ${podcast.title}`} className="podcast-container">
      <img
        src={podcast.thumbnail}
        alt={`${podcast.title} thumbnail`}
        className="podcast-thumbnail"
      />
      <div className="podcast-info">
        <h3 className="podcast-title">{podcast.title}</h3>
        <p className="podcast-description">{podcast.description}</p>
      </div>
      <audio
        ref={audioRef}
        src={podcast.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="podcast-controls">
        <button onClick={handlePlayPause} className="play-pause-btn">
          {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
        </button>
        <div className="progress-bar-container">
          <input
            type="range"
            className="progress-bar"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
          />
          <div className="time-info">
            <span>{formatTime(currentTime)}</span> /{" "}
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
