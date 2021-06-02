import * as types from '../actionTypes';
import axios from 'axios';
import API_URL from '../../constance/api';

const { GET_LIST_ARTICLE_URL, GET_DETAIL_ARTICLE_URL } = API_URL;

export const getListArticles = () => async (dispatch: any) => {
  try {
    const response = await axios.get(GET_LIST_ARTICLE_URL);
    dispatch({
      type: types.GET_LIST_ARTICLES,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: types.GET_LIST_ARTICLES_ERROR,
    });
  }
}

export const getDetailArticle = (id: string) => async (dispatch: any) => {
  try {
    const response = await axios.get(GET_DETAIL_ARTICLE_URL + id);
    dispatch({
      type: types.GET_DETAIL_ARTICLE,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: types.GET_DETAIL_ARTICLE_ERROR,
    });
  }
}
