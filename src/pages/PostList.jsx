import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [postlist, setPostList] = useState([]);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setPostList(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    getPostList();
  }, []);

  return (
    <div>
      <h1>Список постів</h1>

      {postlist.map((post,i) => {
        return (
          <div key={i} className="users">
            <Link to={`${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
