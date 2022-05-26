import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { url } from "../Utils/GetData";

import styles from "../Styles/Modal/Modal.module.scss";
import { useNavigate } from "react-router-dom";
const editSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  text: Yup.string().required("Content is required"),
});
function EditBlog({ modal, close }) {
  const { id, title, text } = modal;

  const handleClose = () => {
    close(false);
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const timestamp = Date.now();
    const time = new Date(timestamp).toLocaleString();
    values.timestamp = time;
    axios
      .put(`${url}${id}`, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
    navigate("/TechFirst");
  };
  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h1>Edit Blog</h1>
          <button onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <Formik
          initialValues={{
            title: title,
            text: text,
          }}
          validationSchema={editSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.modal_form}>
              <div>
                <label htmlFor="title">Title</label>
                <Field
                  name="title"
                  id="title"
                  className={styles.modal_form__fields}
                  type="text"
                  placeholder="Type the title of the post"
                />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="text">Text</label>
                <Field
                  as="textarea"
                  name="text"
                  id="text"
                  className={styles.modal_form__fields}
                  row="5"
                  type="text"
                  placeholder="Type the text of the post"
                />
                {errors.text && touched.text ? <div>{errors.text}</div> : null}
              </div>
              <button className={styles.modal_form__button} type="submit">
                Editar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditBlog;
