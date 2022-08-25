import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postsSlice";

const PostsList = () => {
  // const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  // because post are going to be updated when app loads.(see index.js)
  // useEffect(() => {
  //   if (postStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postStatus, dispatch]);

  // order by post date descending
  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
