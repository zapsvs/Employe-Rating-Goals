import React from "react";
import BasicTextField from "../common/BasicTextField";
import "../LoginPage.css";
import { Grid, Link, Typography } from "@mui/material";
import BasicButton from "../common/BasicButton";
import logo from '../assets/logo.png'
function LoginPage() {
  return (
    <div className="bg-container">
      <div className="logo-img-container">
        <img src={logo} style={{height:"35%",width:"45%"}}/>
      </div>
      <div className="login-details-container">
        <Typography variant="h4" sx={{color:"white",fontSize:"50px"}}>Welcome Back!</Typography>
        <Typography variant="overline" sx={{marginBottom:"3rem",fontSize:"14px",color:"white",textTransform: 'none',}}>Don't you have an account yet?  <span style={{cursor:"pointer",textDecoration:"underline"}}> Sign Up</span></Typography>
        <div style={{width:"100%", display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div style={{marginBottom:"1.5rem",width:"50%"}}>
          <BasicTextField placeHolder={"Enter Email"} label={"Email Id"}/>
        </div>
        <div style={{marginBottom:"1rem",width:"50%"}}>
            <BasicTextField  placeHolder={"Enter Password"} label={"Password"}/>
            </div>
        <div style={{marginBottom:"1rem",width:"50%",display:"flex",justifyContent:"end"}}>
          <Typography fontSize={"12px"} sx={{color:"white",textDecoration:"underline" , textTransform: 'none',cursor:"pointer"}} variant="overline" >Forgot Password?</Typography>
        </div>
        <BasicButton sx={{  width:"50%",textTransform: 'none'}} label={"Login"} variant={"contained"} />
        
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
