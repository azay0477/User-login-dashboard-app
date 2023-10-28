"use client";
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import "../styles/Home.module.css";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    operationsAfterLoggedIn();
  }, [session && session.user]);

  const operationsAfterLoggedIn = () => {
    if (session && session.user) {
      localStorage.setItem("user-details", JSON.stringify(session.user));
      router.push("dashboard");
    }
  };

  if (session && session.user) {
    return <div>Welcome, {session.user.email}</div>;
  } else {
    return (
      <div className="dashbaord" >
        <p className="headerDash">Welcome to User dashboard</p>
        <button className="signIn" onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default Login;
