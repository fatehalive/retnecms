import * as type from "./types";
import axios from "axios";

export const getLatestArticles = (data) => {
  return {
    type: type.GET_LATEST_ARTICLES,
    payload: data,
  };
};

// DISPATCH TO ACTION
export const sentLatestArticles = () => async (dispatch) => {
  try {
    let params = {
      pageSize: 5,
      pageNumber: 1,
      filter: {
        article_title: null,
        username: null,
        category_name: "",
        status: null,
      },
    };
    return await axios
      .post("http://localhost:5000/news-article/find", params)
      .then((response) => {
        const { items } = response.data.data;
        dispatch(getLatestArticles(items));
      });
  } catch (error) {
    console.error(error);
  }
};
