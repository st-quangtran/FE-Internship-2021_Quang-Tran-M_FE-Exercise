import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Error } from './index';
import { IParam } from '../interface/index';
import API_URL from '../constance/api';

const { GET_DETAIL_ARTICLE_URL } = API_URL;

const DetailArticle = () => {
  const { id } = useParams<IParam>();
  const [detailArticle, setDetailArticle] = useState(null);
  const [loading, setLoading] = useState({
    isLoading: true,
    error: false,
  });
  useEffect(() => {
    axios.get(GET_DETAIL_ARTICLE_URL + id)
      .then((response) => {
        setDetailArticle(response.data);
        setLoading({
          ...loading,
          isLoading: false
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading({
          isLoading: false,
          error: true,
        });
      })
  }, [id]);
  const showCreatedAt = () => {
    let date: string = detailArticle.createdAt.split('T')[0];
    let time: string = detailArticle.createdAt.split('T')[1].split('.')[0];
    let temp: string[] = date.split('-').reverse();
    return temp.join('-') + ' ' + time;
  }
  const render = () => {
    if (loading.isLoading) {
      return <p>Loading...</p>
    }
    if (!loading.error) {
      return <div className="form-detail container">
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
            <span className="created-article">{showCreatedAt()}</span>
            <span className="read-article">{detailArticle.minsRead}</span>
          </div>
        </div>
      </div>
    </div>
    }
    return <Error />
  }
  return (
    <>
      {render()}
    </>
  )
}

export default DetailArticle;
