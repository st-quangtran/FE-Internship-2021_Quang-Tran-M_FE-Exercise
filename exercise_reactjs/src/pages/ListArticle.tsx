import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Article, Error } from '../components';
import { pageRenderer } from '../utils/pageRenderer';
import { IListArticles } from '../interface';
import { getListArticles } from '../store/articles/action';

const PageListArticle = (props: IListArticles) => {
  const { data } = props;
  const showListArticle = () => {
    return data.map((item) => <li className="list-item col-12" key={item.id}><Link to={'/articles/' + item.id}> <Article {...item}/> </Link></li>);
  }
  return (
    <>
      <section className="section-articles container">
        <ul className="list-group row">
          {showListArticle()}
        </ul>
      </section>
    </>
  )
}

const PageListArticleTp = pageRenderer(PageListArticle);

const ListArticle = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateOrAny) => state.listArticles.data);
  const error = useSelector((state: RootStateOrAny) => state.listArticles.error);
  useEffect(() => {
    dispatch(getListArticles());
  }, []);
  return (
    <>
      {error ? <Error /> : <PageListArticleTp data={data} />}
    </>
  )
}

export default ListArticle;
