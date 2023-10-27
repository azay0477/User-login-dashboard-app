"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { connect } from "react-redux";
import { store } from "../store/store";
import Types from "../store/types";
import Accordion from "./accordion";
import CanvasJS from "bootstrap";

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
      display : "flex"
    };


  //   var chart1 = new CanvasJS.Chart("chartContainer1", {
  //     title:{
  //     	text:"Chart 1"
  //     },  
  //     data: [
  //     {
  //       type: "column",
  //       dataPoints: [
  //       { x: 10, y: 71 },
  //       { x: 20, y: 55},
  //       { x: 30, y: 50 },
  //       { x: 40, y: 65 },
  //       { x: 50, y: 95 },
  //       { x: 60, y: 68 },
  //       { x: 70, y: 28 },
  //       { x: 80, y: 34 },
  //       { x: 90, y: 14}
  //       ]
  //     }
  //     ]
  //   });
  // chart1.render();

  

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
      <div >

      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div className="panel-body">
        <div id="chartContainer1" style={{height: "300px", width: "100%"}}>
        </div>
      </div>
    </div>

      <div style={styles}>
      <Accordion title="Click Me!" content="The Chart" />
      <Accordion title="Click Me!" content="this is content 2" />
      <Accordion title="Click Me!" content="this is content 3" />
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
