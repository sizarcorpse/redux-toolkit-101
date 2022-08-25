import PostAuthor from "../users/PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 75)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <Link
          to={`/post/${post.id}`}
          style={{
            color: "#fff",
            display: "block",
          }}
        >
          View Post
        </Link>
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsExcerpt;
