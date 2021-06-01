import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Error } from './index';
import { pageRenderer } from '../utils/pageRenderer';
import { IDetailArticle, IParam, IPropsDetailArticle } from '../interface';
import API_URL from '../constance/api';
import { convertDate } from '../utils/convertDate';

const { GET_DETAIL_ARTICLE_URL } = API_URL;

const PageDetailArticle = (props: IPropsDetailArticle) => {
  const { data } = props;
  return (
    <>
      <div className="form-detail container">
        <p className="title-detail">
          detail article
        </p>
        <div className="article article-show-detail">
          <div className="detail-article">
            <p className="category-article">{data.category}</p>
            <h3 className="title-article">{data.title}</h3>
            <img src={data.image} className="img-article" alt="image"/>
            <p className="desc-article">{data.desc}</p>
            <p className="content-article">{data.content}</p>
            <div className="status-article">
              <h4 className="author-article">{data.author}</h4>
              <span className="created-article">{convertDate(data.createdAt)}</span>
              <span className="read-article">{data.minsRead}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const PageDetailArticleTp = pageRenderer(PageDetailArticle);

const DetailArticle = () => {
  const { id } = useParams<IParam>();
  const [data, setData] = useState<IDetailArticle>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios.get(GET_DETAIL_ARTICLE_URL + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
  }, [id]);
  return (
    <>
      {error ? <Error /> : <PageDetailArticleTp data={data}/> }
    </>
  )
}

export default DetailArticle;
