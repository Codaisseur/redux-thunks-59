import axios from "axios";
import { createCacheKeyComparator } from "reselect/es/defaultMemoize";
import { postsFetched, startLoading, stopLoading } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

// Structure
export const fetchPosts = () => async (dispatch, getState) => {
  // here is the logic
  try {
    // flip loading to true before request
    dispatch(startLoading());

    const state = getState();
    console.log("what is getState", state);
    // make request, wait for response
    const response = await axios.get(`${API_URL}/posts`);

    // save data to redux
    dispatch(postsFetched(response.data.rows));

    // flip loading to false to display data
    dispatch(stopLoading());
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchPostById = (postId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    console.log("one post", response);
  } catch (e) {
    console.log(e.message);
  }
};

// what is getState
// where is dispatch coming from?
//

// 61
