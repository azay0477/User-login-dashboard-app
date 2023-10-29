"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { connect } from "react-redux";
import { store } from "../store/store";
import Types from "../store/types";
import Accordion from "./accordion";
import CanvasJS from "bootstrap";
import VerticalChart from "../components/vertical-chart";

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

  const styles = {
    fontFamily: "Roboto",
    display: "flex"
  };



  return (
    <>
      <div >
        <button className="signoutButton" onClick={() => signOut()}>Sign out</button>
      </div>
      <div className="card"  >
        <div  className="userImage " >
          <img
            src={props.userDetails?.image}
            alt="Avatar"
            style={{ width: "10%" }}
          />
        </div>
        <div >
          <div className="userName">
            <h4>
              <b>{props.userDetails?.name}</b>
            </h4>
          </div>
          <div className="userEmail">
            <p>{props.userDetails?.email}</p>
          </div>
        </div>
      </div>
      <div >



        <div
          // className="accordionBtn" 
          style={styles}>
          <div className="accordionBtn1">
            <Accordion title="Chart (click here)" content={<VerticalChart />} />
          </div>
          <div className="accordionBtn1" style={{color:"black"}}>
            <Accordion title="Tab 2" content="this is content 2" />
          </div>
          <div className="accordionBtn1">
            <Accordion title="Tab 3" content="this is content 3" />
          </div>
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
