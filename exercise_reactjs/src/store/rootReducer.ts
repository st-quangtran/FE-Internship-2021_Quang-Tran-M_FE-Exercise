import { combineReducers } from 'redux';
import { listArticlesReducer, detailArticleReducer } from './articles/reducer';

const rootReducer = combineReducers({
  listArticles: listArticlesReducer,
  detailArticle: detailArticleReducer
});

export default rootReducer;
