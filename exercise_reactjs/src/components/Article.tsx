import React from 'react';
import { IArticle } from '../interface/IArticle';
import {convertDate} from '../utils/convertDate';

const Article = ({title, author, createdAt, category, minsRead, desc, image} : IArticle) => {
  return (
    <div className="article">
      <img src={image} className="img-article" alt="image"/>
      <div className="detail-article">
        <p className="category-article">{category}</p>
        <h3 className="title-article">{title}</h3>
        <p className="desc-article">{desc}</p>
        <div className="status-article">
          <h4 className="author-article">{author}</h4>
          <span className="created-article">{convertDate(createdAt)}</span>
          <span className="read-article">{minsRead}</span>
        </div>
      </div>
    </div>
  )
}

export default Article;
