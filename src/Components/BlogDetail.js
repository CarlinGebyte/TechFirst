import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, url } from "../Utils/GetData";
import EditBlog from "./EditBlog";
import styles from "../Styles/Detail/Detail.module.scss";
import parse from "html-react-parser";
function BlogDetail() {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState({});
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useState(() => {
    getData(`${url}${id}`)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${url}${id}`).then((res) => {
      console.log(res);
      navigate("/TechFirst/");
    });
  };
  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <img
          src={
            "https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.webp"
          }
          alt="campeón"
        />
        <h1>{post.title}</h1>
      </div>
      <div className={styles.body}>
        <div>{post.text !== undefined ? parse(post.text) : ""}</div>
        <div className={styles.body_rol}>
          <span>{post.timestamp}</span>
        </div>
        <div className={styles.body_buttons}>
          <button
            className={styles.body_buttons__edit}
            onClick={() => {
              console.log("Editar");
              setModal(true);
            }}
          >
            Edit
          </button>
          <button
            className={styles.body_buttons__delete}
            onClick={() => {
              console.log(post.id);
              handleDelete(post.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {modal === true ? <EditBlog modal={post} close={setModal} /> : ""}
    </div>
  );
}

export default BlogDetail;
