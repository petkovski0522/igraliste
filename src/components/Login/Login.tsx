import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: LoginFormValues) => {
    // Handle login logic here
    console.log("Form values submitted:", values);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Login</button>

          <div>
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

          <div>
            {/* Links for registration and forgot password */}
            <a href="/register">Register</a>
            <a href="/forgot-password">Forgot your password?</a>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
