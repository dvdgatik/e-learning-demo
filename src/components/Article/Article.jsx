import React from 'react';
import './Article.css';

const Article = ({ content, articleId }) => {
  return (
    <article className="article" role="article" aria-labelledby={`article-${articleId}`}>
      <h2 id={`article-${articleId}`} className="article-title">
        Artículo {articleId}
      </h2>
      <p>{content}</p>
    </article>
  );
};

export default Article;
