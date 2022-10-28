import { NavLink } from "react-router-dom"
import React from "react";
import "./header.css"
import { useState } from "react";
function TeacherHeader(){
  const [open, setOpen] = React.useState(false);
  const [openquiz, setOpenQuiz] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenquiz = () => {
    setOpenQuiz(!openquiz);
  };
   return(
    <>
         <div className="navBar">
                    <ul>
                    <NavLink  exact to='/teacher'><li>Home</li></NavLink>   
                    <NavLink  to='/teachereditprofile'><li>Edit profile</li></NavLink>  
                    <NavLink  to='/teachermaintainquizes'><li>Maintain Quizes</li></NavLink>  
                    <div className="dropdown">
                      <button id="btnfunc" style={{backgroundColor:'lightblue',textDecoration:'underline',border:'none',color:'purple',fontSize:'15px',marginRight:'20px',marginTop:'5px',cursor:'pointer'}} onClick={handleOpen}>Functionalities</button>
                      {open ? (
                        <div className="dropit">
                        <ul className="menu">
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/teacheranalyzeResult'><li className="btn1">Analyze Results</li></NavLink>   
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/teacheruploadResult'><li className="btn1">Upload Quiz Marks</li></NavLink>    
                        <NavLink className="btnf" style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/teachersubmitfeedback'><li className="btn1">Submit feedback</li></NavLink>      
                        </ul>
                        </div>
                      ) : null}
                    </div>
                    </ul>
              </div>
              
    </>
   );
}

export default TeacherHeader