import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ListArticle } from './src/pages/index';
import { DetailArticle } from './src/components/index';
import './src/assets/stylesheet/style.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <ListArticle />
      </Route>
      <Route exact path='/articles/:id'>
        <DetailArticle/>
      </Route>
    </Switch>
  </Router>
  , document.getElementById('app-root')
)
