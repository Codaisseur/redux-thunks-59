// src/pages/Homepage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postsFetched } from "../store/posts/slice";
import { selectPosts } from "../store/posts/selectors";
import { fetchPosts, fetchPostById } from "../store/posts/thunks";

export default function Homepage() {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    // thunk to fetch all posts
    dispatch(fetchPosts());

    // thunk to fetch 1 post
    // dispatch(fetchPostById(params.id));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.loading
        ? "Loading"
        : posts.all.map((post) => (
            <div
              style={{ border: "1px solid white", marginBottom: 10 }}
              key={post.id}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
    </div>
  );
}
