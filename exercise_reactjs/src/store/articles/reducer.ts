import * as types from '../actionTypes';

const initialListState: any = {
  data: null,
  error: false
}

export const listArticlesReducer = (state = initialListState, action: any) => {
  switch (action.type) {
    case types.GET_LIST_ARTICLES:
      return {
        ...state,
        data: action.payload
      };
    case types.GET_LIST_ARTICLES_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return {...state};
  }
}

const initialDetailState: any = {
  data: null,
  error: false
}

export const detailArticleReducer = (state = initialDetailState, action: any) => {
  switch (action.type) {
    case types.GET_DETAIL_ARTICLE:
      return {
        ...state,
        data: action.payload
      }
    case types.GET_DETAIL_ARTICLE_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return {...state};
  }
}
