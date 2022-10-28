import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {GoogleButton} from 'react-google-button'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
function Login(){
    const history=useHistory()
    const [userInfo,setUserInfo]=useState({
        name: "",
        emailId: ""
    })
    const [isLoggedIn,setisLoggedIn]=useState(false)
    const [iderror,setIDError]=useState('')
    const [passerror,setPassError]=useState('')
    const [roll,setRoll]=useState('')
    const [password,setPass]=useState('')
    const CLIENT_ID =
  "522915056637-4f5if0j5lkh94t6foq82st26fk2m89ko.apps.googleusercontent.com";
  const responseGoogleSuccess = (response) => {
    console.log();
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    setUserInfo(userInfo)
    setisLoggedIn(true)
  }

  // Error Handler
  const responseGoogleError = (response) => {
    console.log(response);
  };
 const logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    setUserInfo(userInfo)
    setisLoggedIn(false)
  };
  const onsignin=()=>{
    if(roll===''){
        setIDError("Student ID can't be empty")
    }
    if(password===''){
      setPassError("Password can't be empty")
     }
    else if(roll!=='' && password!==''){
      history.push('/home')
    }
  }
    return (
        <>
           <div style={{display:'flex',flexDirection:'row'}}>
           <div style={{marginLeft:'200px', marginTop:'20px', display:'flex', flexDirection:'column'}}>
            <img style={{display:'block' , width:'200px', margin:'auto'}} width="200px" height="115px" src="https://vulms.vu.edu.pk/App_Themes/Default/Images/logos/Logo-New.png"  />
            <form style={{display:'flex', flexDirection:'column' , marginTop:'30px'}}>
                <input style={{width:'360px' , height:'43px'}} type="text" placeholder="Student ID" value={roll} onChange={(e)=>setRoll(e.target.value)}/>
                 {roll==='' && <p1 style={{color:'red'}}>{iderror}</p1>}
                <input style={{width:'360px' , height:'43px', marginTop:'30px'}} type="text" placeholder="Password" value={password} onChange={(e)=>setPass(e.target.value)}/>
                {password==='' && <p1 style={{color:'red'}}>{passerror}</p1>}
            </form>
            <div style={{display:'flex', flexDirection:'row'}}>
            <NavLink style={{marginTop:'20px'}} to='/editprofile'>Forgot Password ?</NavLink> 
            <NavLink style={{marginTop:'20px' , marginLeft:'90px'}} to='/signup'>I don't have account</NavLink> 
            </div>
            <button onClick={onsignin} style={{cursor:'pointer',margin:'auto', display:'block', width:'150px', backgroundColor:'lightblue' , height:'40px', marginTop:'40px' ,marginBottom:'30px', borderRadius:'20px'}}>Login</button>
            {/* <div style={{marginTop:'20px' ,cursor:'pointer'}}> */}
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
              style={{marginTop:'20px'}}
            />
            {/* </div> */}
            {/* <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout> */}
           </div>
            <div style={{width:'100%' , backgroundColor:'purple' ,marginLeft:'20px' ,textAlign:'center',paddingTop:'100px', height:'500px'}}>
                 {/* <div style={{margin:'auto', display:'block', width:'500px'}}> */}
                      <h1 style={{color:'white' , fontWeight:'bold'}}>Learning Management System</h1>
                      <h1 style={{color:'white' , fontWeight:'bold'}}>Hold faithfulness and sincerity as first principles. (Confucius) </h1>
                 {/* </div> */}
            </div>
           </div>
        </>
    );
}
export default Login