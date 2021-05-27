import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Post, DetailPost } from './src/components/index';
import './src/assets/stylesheet/style.scss';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://6088e20da6f4a300174271e7.mockapi.io/articles')
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
      listPosts = data.map((item, index) => <li className="list-item" key={(index+1).toString()}><Link to={'/articles/' + item.id}> <Post {...item}/> </Link></li>);
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
        <DetailPost/>
      </Route>
    </Switch>
  </Router>
  , document.getElementById('app')
)
