import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Post from './src/components/Post';
import './src/assets/stylesheet/style.scss';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://6088e20da6f4a300174271e7.mockapi.io/articles')
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
      for (let i = 0; i < data.length; i++) {
        listPosts.push(<li className="list-item" key={(i+1).toString()}><Post {...data[i]}/></li>)
      }
      return listPosts;
    }
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
