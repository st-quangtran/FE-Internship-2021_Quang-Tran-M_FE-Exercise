import React from 'react';
import { INews } from '../interface/INews';

const Post = ({title, author, createdAt, category, minsRead, desc, image} : INews) => {
  let date: string = createdAt.split('T')[0];
  let time: string = createdAt.split('T')[1].split('.')[0];
  const showCreatedAt = () => {
    let temp: string[] = date.split('-').reverse();
    return temp.join('-') + ' ' + time;
  }
  return (
    <div className="post">
      <img src={image} className="img-post" alt="image"/>
      <div className="detail-post">
        <p className="category-post">{category}</p>
        <h3 className="title-post">{title}</h3>
        <p className="desc-post">{desc}</p>
        <div className="status-post">
          <h4 className="author-post">{author}</h4>
          <span className="created-post">{showCreatedAt()}</span>
          <span className="read-post">{minsRead}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;
