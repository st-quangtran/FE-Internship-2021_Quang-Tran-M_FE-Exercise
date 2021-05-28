import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import { Article } from '../components/index';
import API_URL from '../constance/api';

const { GET_LIST_ARTICLE_URL } = API_URL;

const ListArticle = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(GET_LIST_ARTICLE_URL)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function showListPosts() {
    let listPosts: any[] = [];
    if (data.length) {
      listPosts = data.map((item) => <li className="list-item col-12" key={item.id}><Link to={'/articles/' + item.id}> <Article {...item}/> </Link></li>);
    }
    return listPosts;
  }
  return (
    <>
      {
        data.length && 
        <section className="section-articles container">
          <ul className="list-group row">
            {showListPosts()}
          </ul>
        </section>
      }
    </>
  )
}

export default ListArticle;
