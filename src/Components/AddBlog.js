import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import uuid from "react-uuid";
import axios from "axios";
import { url } from "../Utils/GetData";
import { fileUp } from "../Utils/FileUpload";

import styles from "../Styles/AddBlog/Add.module.scss";

const addSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "El nombre debe tener mínimo 4 caracteres")
    .required("Title is required"),
  text: Yup.string()
    .min(10, "La descripción de mínimo 10 caracteres")
    .required("Content is required"),
});
function AddBlog() {
  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post(url, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.addBlog}>
      <div className={styles.header}>
        <h1>Agregar post</h1>
      </div>
      <Formik
        initialValues={{
          title: "",
          text: "",
        }}
        validationSchema={addSchema}
        onSubmit={(values, { resetForm }) => {
          const timestamp = Date.now();
          const time = new Date(timestamp).toLocaleString();
          values.timestamp = time;
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div>
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                id="title"
                className={styles.form_fields}
                type="text"
                placeholder="Type the title of the post"
              />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
            </div>
            <div>
              <label htmlFor="text">text</label>
              <Field
                as="textarea"
                name="text"
                id="text"
                className={styles.form_fields}
                row="5"
                type="text"
                placeholder="Type the text of your blog post"
              />
              {errors.text && touched.text ? <div>{errors.text}</div> : null}
            </div>
            <button className={styles.form_button} type="submit">
              Agregar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddBlog;
