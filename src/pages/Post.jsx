import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    };
    getPost();
  }, [id]);
  
  return (
    <div>
      <h1>Post page</h1>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </div>
  );
};
export default Post;
