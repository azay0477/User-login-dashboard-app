"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { connect } from "react-redux";
import { store } from "../store/store";
import Types from "../store/types";

const Dashboard = (props: any) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const res: any = localStorage.getItem("user-details");
    store.dispatch({ type: Types.USER_DETAILS, payload: JSON.parse(res) });
  }, []);

  useEffect(() => {
    !(session && session.user) && router.push("login");
  }, [session]);

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      <div className="card">
        <img
          src={props.userDetails?.image}
          alt="Avatar"
          style={{ width: "10%" }}
        />
        <div className="container">
          <h4>
            <b>{props.userDetails?.name}</b>
          </h4>
          <p>{props.userDetails?.email}</p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userDetails: state.userDetails,
  };
};

export default connect(mapStateToProps)(Dashboard);
