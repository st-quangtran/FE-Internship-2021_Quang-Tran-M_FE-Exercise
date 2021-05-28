import React from 'react';
import { INews } from '../interface/INews';

const Article = ({title, author, createdAt, category, minsRead, desc, image} : INews) => {
  const showCreatedAt = () => {
    let date: string = createdAt.split('T')[0];
    let time: string = createdAt.split('T')[1].split('.')[0];
    let temp: string[] = date.split('-').reverse();
    return temp.join('-') + ' ' + time;
  }
  return (
    <div className="article">
      <img src={image} className="img-article" alt="image"/>
      <div className="detail-article">
        <p className="category-article">{category}</p>
        <h3 className="title-article">{title}</h3>
        <p className="desc-article">{desc}</p>
        <div className="status-article">
          <h4 className="author-article">{author}</h4>
          <span className="created-article">{showCreatedAt()}</span>
          <span className="read-article">{minsRead}</span>
        </div>
      </div>
    </div>
  )
}

export default Article;
