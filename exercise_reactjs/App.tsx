import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './src/assets/stylesheet/style.scss';
import rootReducer from './src/store/rootReducer';

const ListArticle = React.lazy(() => import('./src/pages/ListArticle'));
const DetailArticle = React.lazy(() => import('./src/components/DetailArticle'));

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App;
