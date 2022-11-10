import React, { useState, useEffect,useRef } from "react";
import {  Col, Row,} from "antd";
import "../../Authentication/ThankYou/ThankYou.css";
import { Link } from "react-router-dom";
import { fetchApi } from "../Presentation/utils";
// import { useRouter } from "next/router";

import { useParams } from "react-router-dom";

export const Verify=()=> {
  // const router = useRouter();
  const [state, setState] = useState("verifying");
  const para=useParams();
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (para._id) {
      // const { id } = router.query;

      if (dataFetchedRef.current) {
        console.log("inside usefefdf")
        fetchApi(`api/user/verify/${para._id}`, "POST", {}, false).then((response) => {
          if (!response.ok) {
            setState("failed");
            return;
          }
            setState("verified");
        });
      }
      dataFetchedRef.current = true;
    
    }
  }, [para._id]);

  function info() {
    if (state === "verifying") {
      return <h3>Verifying...</h3>;
    } 
    else if (state === "verified") {
      return (
        <Link href="/login">
          <a>Verified! Go to login</a>
        </Link>
      );
    } else {
      return <h3>Unable to verify!</h3>;
    }
  }


 const verified=()=>
 {

   



  return(<><div className="my-5" style={{fontSize:"3rem"}}>You are successfully verified</div>
  <div style={{fontSize:"3rem"}}>Click here to get back to login: <Link to="/Login">Go back to Login</Link> </div></>)

 }

 const uhoh=()=>
 {

   



  return(<><div className="my-5" style={{fontSize:"3rem"}}>Email Already Registered!</div>
  <div style={{fontSize:"3rem"}}>Please USe another Email<Link to="/createAccount">Go back to Register</Link> </div></>)

 }


  return (
    <div className="registerealfirst">
 
    <div>
      <Row className="container" style={{marginTop: "35rem",
  marginLeft:"25rem",

  scale:"60%"}} >
        <div className="containerLogin">
          <img
            style={{
              position: "absolute",
              zIndex: "4",
              width: "17.0rem",
              right: "-16.0rem",
              top: "0rem",
            }}
            src="/assets/images/GirlRegistr.png"
            alt="error"
          />
         <div className="backgroundBlue" />
      <div className="headingContainer">
        {state === "verified"?<h1 className="heading">Great!</h1>:<h1 className="heading">UH OH!!</h1>}
        {state === "verified"?verified():uhoh()}
        {/* {true?uhoh():<div></div>} */}
      </div>

          <Col className="inputContainer">
              
      </Col>


        </div>
      </Row>
    </div>
  </div>
  );



}
