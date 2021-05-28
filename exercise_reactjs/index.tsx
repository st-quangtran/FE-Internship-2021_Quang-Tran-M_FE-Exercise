import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Article, DetailArticle } from './src/components/index';
import './src/assets/stylesheet/style.scss';
import API_URL from './src/constance/api';

const { GET_LIST_ARTICLE_URL } = API_URL;

const App = () => {
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
      listPosts = data.map((item) => <li className="list-item" key={item.id}><Link to={'/articles/' + item.id}> <Article {...item}/> </Link></li>);
    }
    return listPosts;
  }
  return (
    <>
      {
        data.length && 
        <>
          <ul className="list-group">
            {showListPosts()}
          </ul>
        </>
      }
    </>
  )
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
      <Route exact path='/articles/:id'>
        <DetailArticle/>
      </Route>
    </Switch>
  </Router>
  , document.getElementById('app')
)
