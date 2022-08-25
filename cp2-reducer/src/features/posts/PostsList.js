import React from "react";
import { useSelector } from "react-redux";
import TimeAgo from "../posts/TimeAgo";
import PostAuthor from "../users/PostAuthor";
import { selectAllPosts } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  // order by post date descending
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    );
  });

  return (
    <section>
      PostsList
      {renderPosts}
    </section>
  );
};

export default PostsList;
