import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Article, Error } from '../components';
import { pageRenderer } from '../utils/pageRenderer';
import API_URL from '../constance/api';
import { IArticle, IListArticles } from '../interface';

const { GET_LIST_ARTICLE_URL } = API_URL;

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
  const [data, setData] = useState<IArticle[]>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios.get(GET_LIST_ARTICLE_URL)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  }, []);
  return (
    <>
      {error ? <Error /> : <PageListArticleTp data={data} />}
    </>
  )
}

export default ListArticle;
