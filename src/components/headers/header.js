import { NavLink } from "react-router-dom"
import React from "react";
import "./headers.css"
import { useState } from "react";
function Header(){
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose=()=>{
    setOpen(false);
  }
   return(
    <>
         <div className="navBar">
                    <ul>
                    <NavLink  exact to='/'><li>Home</li></NavLink>   
                    <NavLink  to='/editprofile'><li>Edit profile</li></NavLink>  
                    <div className="dropdown">
                      <button id="btnfunc" style={{backgroundColor:'lightblue',textDecoration:'underline',border:'none',color:'purple',fontSize:'15px',marginRight:'20px',marginTop:'5px',cursor:'pointer'}} onClick={handleOpen}>Functionalities</button>
                      {open ? (
                        <div className="dropit">
                        <ul className="menu">
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/attemptQuiz'><li className="btn1">Attempt Quiz</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/analyzeResult'><li className="btn1">Analyze results</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/recheckRequest'><li className="btn1">Rechecking request</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/checkresults'><li className="btn1">Check results</li></NavLink> 
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/submitfeedback'><li className="btn1">Submit feedback</li></NavLink>     
                        </ul>
                        </div>
                      ) : null}
                    </div>
                    </ul>
              </div>
              
    </>
   );
}

export default Header