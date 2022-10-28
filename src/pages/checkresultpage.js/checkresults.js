import React from "react";
import './checkres.css'
import { NavLink } from "react-router-dom";
import { useState } from "react";
function CheckResults(){
    //summy data
    const quizResults=[
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalMarks:'10',
            ObtainedMarks:'7'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalMarks:'10',
            ObtainedMarks:'7'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalMarks:'10',
            ObtainedMarks:'7'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalMarks:'10',
            ObtainedMarks:'7'
        },
        {
            id:'quiz1',
            topic:'parts of speech',
            courseCode:'ENG1102',
            totalMarks:'10',
            ObtainedMarks:'7'
        }
    ]
    const courses=[
        {
            name:'ENGLISH composition',
            courseCode:'ENG1102',
        },
        {
            name:'Intro to Info. and Comm. Technologie',
            courseCode:'CL117',
        },
        {
            name:'Programming Fundamentals',
            courseCode:'CS118',
        },
        {
            name:'Applied Physics',
            courseCode:'EE117',
        },
        {
            name:'Calculus and Analytical Geometry',
            courseCode:'MT119',
        },
        {
            name:'Islamic and Religious Studies',
            courseCode:'SS111',
        },
        {
            name:'Digital Logic Design',
            courseCode:'EE227',
        },
    ]
    const [value,setValue]=useState('class')

      console.log("ASIM",value)
 return (
    <>
      <div className="main_div">
      <div style={{width:'300px', marginLeft:'-70px'}}>
         <div style={{ display:'flex',flexDirection:'column',paddingLeft:'20px', marginTop:'100px'}}> 
         {courses.map((item)=>(
                <div style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
                <button onClick={(e)=>setValue(e.target.id)} style={{marginTop:'20px', backgroundColor:'#4FA095', cursor:'pointer' ,height:'50px', width:'130px', borderRadius:'20px'}} id={item.courseCode}>{item.courseCode}</button>
                </div>
            ))}
            </div>
         </div>
         <div style={{marginLeft:'50px'}}>
         <h1 style={{color:'black',width:'200px',display:'block',margin:'auto',fontSize:'20px', marginTop:'20px'}}>Quiz Results</h1>
      <table className="table_div">
      
      <tr>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>ID</td>
        <td id="t1" style={{fontWeight:'bold',fontSize:'20px'}}>Topic</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Course Code</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Total marks</td>
        <td style={{fontWeight:'bold',fontSize:'20px'}}>Obtained Marks</td>
        </tr>
        {quizResults.map((item)=>(
            <tr>
            <td style={{textDecoration:'underline', color:'blue',cursor:'pointer'}}>{item?.id}</td>
            <td>{item?.topic}</td>
            <td>{item?.courseCode}</td>
            <td>{item?.totalMarks}</td>
            <td>{item?.ObtainedMarks}</td>
            </tr>
      ))}
      </table>
      </div>
      </div>
    </>
 )
}

export default CheckResults
