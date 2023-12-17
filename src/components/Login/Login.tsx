// LoginForm.tsx

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./style.module.css";

interface LoginFormValues {
  email: string;
  password: string;
}

class LoginForm extends React.Component {
  initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  onSubmit = (values: LoginFormValues) => {
    // Handle login logic here
    console.log("Form values submitted:", values);
  };

  render() {
    return (
      <div className={style.background}>
        <img src="/assets/imagesAbout/Group1.png" alt="" />
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.onSubmit}
        >
          <Form className={style.form}>
            <div className={style.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={style.error}
              />
            </div>

            <div className={style.formGroup}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={style.error}
              />
            </div>

            <button type="submit" className={style.submitButton}>
              Login
            </button>
            <a href="/forgot-password">Forgot your password?</a>

            <div className={style.secondaryButtons}>
              {/* Secondary buttons for social login */}
              <button
                type="button"
                onClick={() => console.log("Login with Google")}
              >
                Login with Google
              </button>
              <button
                type="button"
                onClick={() => console.log("Login with Facebook")}
              >
                Login with Facebook
              </button>
            </div>

            <div className={style.links}>
              {/* Links for registration and forgot password */}
              <a href="/register">Register</a>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default LoginForm;
