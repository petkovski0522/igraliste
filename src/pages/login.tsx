// pages/login.tsx

import React from "react";
import Head from "next/head";

import LoginForm from "../components/Login/Login";

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
