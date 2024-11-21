// src/pages/AssetPage/AssetPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Article from '../../components/Article/Article';
import Podcast from '../../components/Podcast/Podcast';
import fakeData from '../../data/fakeData';
import './AssetPage.css';

const AssetPage = () => {
  const { id } = useParams();
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    const assetData = fakeData.find((asset) => asset.id === parseInt(id));
    setAsset(assetData);
  }, [id]);

  if (!asset) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="asset-page">
      <div className="back-to-list">
        <Link to="/" className="back-link">Volver a la lista de activos</Link>
      </div>
      <h2 tabIndex={0} aria-label={asset.title} className="asset-title">{asset.title}</h2>
      <p className="asset-description">{asset.description}</p>

      {asset.type === 'video' && <VideoPlayer videoUrl={asset.url} videoId={asset.id} />}
      {asset.type === 'podcast' && (
        <Podcast
          podcast={{
            title: asset.title,
            description: asset.description,
            thumbnail: asset.thumbnail,
            url: asset.url,
            duration: asset.duration,
          }}
        />
      )}
      {asset.type === 'article' && <Article articleId={asset.id} content={asset.content} />}

      
    </div>
  );
};

export default AssetPage;
