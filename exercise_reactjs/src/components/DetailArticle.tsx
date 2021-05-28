import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IParam } from '../interface/index';
import API_URL from '../constance/api';

const { GET_DETAIL_ARTICLE_URL } = API_URL;

const DetailArticle = () => {
  const { id } = useParams<IParam>();
  const [detailPost, setDetailPost] = useState(null);
  useEffect(() => {
    axios.get(GET_DETAIL_ARTICLE_URL + id)
      .then((response) => {
        setDetailPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [id]);
  return (
    <>
      {
        detailPost &&
        <div className="form-detail">
          <p className="title-detail">
            detail post
          </p>
          <div className="post post-show-detail">
            <img src={detailPost.image} className="img-post" alt="image"/>
            <div className="detail-post">
              <p className="category-post">{detailPost.category}</p>
              <h3 className="title-post">{detailPost.title}</h3>
              <p className="desc-post">{detailPost.desc}</p>
              <p className="content-post">{detailPost.content}</p>
              <div className="status-post">
                <h4 className="author-post">{detailPost.author}</h4>
                <span className="created-post">{detailPost.createdAt}</span>
                <span className="read-post">{detailPost.minsRead}</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
    
  )
}

export default DetailArticle;
