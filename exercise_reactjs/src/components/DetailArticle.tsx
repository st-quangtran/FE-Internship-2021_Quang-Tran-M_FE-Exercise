import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IParam } from '../interface/index';
import API_URL from '../constance/api';
import {convertDate} from '../utils/utils';

const { GET_DETAIL_ARTICLE_URL } = API_URL;

const DetailArticle = () => {
  const { id } = useParams<IParam>();
  const [detailArticle, setDetailArticle] = useState(null);
  useEffect(() => {
    axios.get(GET_DETAIL_ARTICLE_URL + id)
      .then((response) => {
        setDetailArticle(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [id]);
  return (
    <>
      {
        detailArticle &&
        <div className="form-detail container">
          <p className="title-detail">
            detail article
          </p>
          <div className="article article-show-detail">
            <div className="detail-article">
              <p className="category-article">{detailArticle.category}</p>
              <h3 className="title-article">{detailArticle.title}</h3>
              <img src={detailArticle.image} className="img-article" alt="image"/>
              <p className="desc-article">{detailArticle.desc}</p>
              <p className="content-article">{detailArticle.content}</p>
              <div className="status-article">
                <h4 className="author-article">{detailArticle.author}</h4>
                <span className="created-article">{convertDate(detailArticle.createdAt)}</span>
                <span className="read-article">{detailArticle.minsRead}</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default DetailArticle;
