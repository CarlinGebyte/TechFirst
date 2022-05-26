import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, url } from "../Utils/GetData";
import styles from "../Styles/Home/Home.module.scss";
import parse from "html-react-parser";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData(url)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Blog Entries</h1>
      </div>
      <ul className={styles.blog}>
        {posts?.map((post) => (
          <li className={styles.blog__item} key={post.id}>
            <div>
              <h4>{post.title}</h4>
            </div>
            <div>{parse(post.text)}</div>
            <button onClick={() => navigate(`Detail/${post.id}`)}>Detail</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
