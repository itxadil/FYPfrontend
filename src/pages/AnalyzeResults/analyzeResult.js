import { Doughnut } from 'react-chartjs-2';
import React from "react"
import {Bar} from 'react-chartjs-2';
import XYPlot from 'reactochart/XYPlot';
import XAxis from 'reactochart/XAxis';
import YAxis from 'reactochart/YAxis';
import LineChart from 'reactochart/LineChart';
import { useState } from 'react';
import 'reactochart/styles.css';
function AnalyzeResult(){
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
const handlechangforclass=()=>{
  setValue('class')
}
const handlechangforstu=(e)=>{
  setValue(e.target.id)
}
    const data = [
        {x: 'Quiz1', y: 20},
        {x: 'Quiz2', y: 30},
        {x: 'Quiz3', y: 35},
        {x: 'Quiz4', y: 30},
      ];
    return(
      <>
     <div style={{display:'flex',flexDirection:'row'}}>
     <div style={{width:'300px', marginLeft:'-70px'}}>
         <div style={{ display:'flex',flexDirection:'column',paddingLeft:'20px', marginTop:'50px', marginLeft:'100px'}}> 
         {courses.map((item)=>(
                <div style={{display:'flex',flexDirection:'row'}}>
                <button onClick={(e)=>setValue(e.target.id)} style={{marginTop:'20px', backgroundColor:'#4FA095', cursor:'pointer' ,height:'50px', width:'130px', borderRadius:'20px'}} id={item.courseCode}>{item.courseCode}</button>
                </div>
            ))}
            </div>
         </div>
         <div style={{marginLeft:'200px'}}> 
         <h1 style={{color:'black',width:'220px',display:'block',margin:'auto',fontSize:'20px', marginTop:'20px'}}>Graph for Quiz Results</h1>
         <div style={{ marginTop:'20px'}}>
            <XYPlot width={800} height={500} >
            <XAxis showGrid={false} title="Quizes" />
            <YAxis title="Obtained Marks"/>
            <LineChart
            data={data}
            x={d => d.x}
            y={d => d.y}
            />
        </XYPlot>
      </div>
      </div>
      </div>
      </>
    );
}

export default AnalyzeResult