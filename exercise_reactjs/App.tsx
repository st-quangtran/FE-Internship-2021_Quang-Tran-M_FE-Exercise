import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './src/assets/stylesheet/style.scss';

const ListArticle = React.lazy(() => import('./src/pages/ListArticle'));
const DetailArticle = React.lazy(() => import('./src/components/DetailArticle'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path='/'>
            <ListArticle />
          </Route>
          <Route exact path='/articles/:id'>
            <DetailArticle />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
