import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Article, Error } from '../components/index';
import API_URL from '../constance/api';

const { GET_LIST_ARTICLE_URL } = API_URL;

const ListArticle = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState({
    isLoading: true,
    error: false,
  });
  useEffect(() => {
    axios.get(GET_LIST_ARTICLE_URL)
      .then(function (response) {
        setData(response.data);
        setLoading({
          ...loading,
          isLoading: false
        });
      })
      .catch(function (error) {
        console.log(error);
        setLoading({
          isLoading: false,
          error: true,
        });
      });
  }, []);
  function showListArticle() {
    let listArticles: any[] = [];
    listArticles = data.map((item) => <li className="list-item col-12" key={item.id}><Link to={'/articles/' + item.id}> <Article {...item}/> </Link></li>);
    return listArticles;
  }
  const render = () => {
    if (loading.isLoading) {
      return <p>Loading...</p>
    }
    if (!loading.error) {
      return (
        <section className="section-articles container">
          <ul className="list-group row">
            {showListArticle()}
          </ul>
        </section>
      )
    }
    return <Error />
  }
  return (
    <>
      {render()}
    </>
  )
}

export default ListArticle;
