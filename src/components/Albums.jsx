import { useState, useEffect } from "react";

const Albums = () => {
        const [albums, setAlbums] = useState([]);
      
        useEffect(() => {
          const getAlbums = async () => {
            try {
              const response = await fetch(
                "https://jsonplaceholder.typicode.com/albums"
              );
      
              if (!response.ok) {
                throw new Error("Failed to fetch users");
              }
              const data = await response.json();
              setAlbums(data);
            } catch (e) {
              console.log(e.message);
            }
          };
      
          getAlbums();
        }, []);
      
        return (
          <div className="users">
            <ul>
              {albums.map((album) => (
                <li key={album.id}>{album.title}</li>
              ))}
            </ul>
          </div>
        );
      };
export default Albums;
