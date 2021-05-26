import React from 'react';
import { INews } from '../interface/INews';

const Post = ({title, author, createdAt, category, minsRead, desc, image} : INews) => {
  return (
    <div className="post">
      <img src={image} className="img-post" alt="image"/>
      <div className="detail-post">
        <p className="category-post">{category}</p>
        <h3 className="title-post">{title}</h3>
        <p className="desc-post">{desc}</p>
        <div className="status-post">
          <h4 className="author-post">{author}</h4>
          <span className="created-post">{createdAt}</span>
          <span className="read-post">{minsRead}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;
