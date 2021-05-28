import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Article from './src/components/Article';
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
      })
  }, []);
  function showListPosts() {
    let listPosts: any[] = [];
    if (data.length) {
      listPosts = data.map((item) => <li className="list-item" key={item.id}><Article {...item}/></li>);
    }
    return listPosts;
  }
  return (
    <>
      {
        data.length && <>
          <ul className="list-group">
            {showListPosts()}
          </ul>
        </>
      }
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
