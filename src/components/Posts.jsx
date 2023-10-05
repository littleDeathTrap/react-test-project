import { useState, useEffect } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const getPosts = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
  
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          const data = await response.json();
          setPosts(data);
        } catch (e) {
          console.log(e.message);
        }
      };
  
      getPosts();
    }, []);
  
    return (
      <div className="users">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };
export default Posts;
