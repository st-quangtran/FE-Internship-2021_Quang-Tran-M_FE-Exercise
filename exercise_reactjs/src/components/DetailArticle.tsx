import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Error } from './index';
import { pageRenderer } from '../utils/pageRenderer';
import { IParam, IPropsDetailArticle } from '../interface';
import { convertDate } from '../utils/convertDate';
import { getDetailArticle } from '../store/articles/action';

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
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateOrAny) => state.detailArticle.data);
  const error = useSelector((state: RootStateOrAny) => state.detailArticle.error);

  useEffect(() => {
    dispatch(getDetailArticle(id));
  }, [id]);
  return (
    <>
      {error ? <Error /> : <PageDetailArticleTp data={data}/> }
    </>
  )
}

export default DetailArticle;
