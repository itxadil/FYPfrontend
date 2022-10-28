import React, { useState } from "react";
import Select from 'react-select'
import './recheckreq.css'
function RecheckRequest(){
  const courses=[
    {
        label:'ENGLISH composition',
        value:'ENG1102',
    },
    {
        label:'Intro to Info. and Comm. Technologie',
        value:'CL117',
    },
    {
        label:'Programming Fundamentals',
        value:'CS118',
    },
    {
        label:'Applied Physics',
        value:'EE117',
    },
    {
        label:'Calculus and Analytical Geometry',
        value:'MT119',
    },
    {
        label:'Islamic and Religious Studies',
        value:'SS111',
    },
    {
        label:'Digital Logic Design',
        value:'EE227',
    },
]
const [value,setValue]=useState({
  label:'Select a Course',
  value:0
})
const handlechangforstu=(e)=>{
  setValue(e)
}
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const [sendReq,setSendReq]=useState('')
      const [selectedValue,setSelectedValue]=useState({
        label:'Select a Quiz',
        value:0
      })
      const handleChange=(e)=>{
        setSelectedValue(e)
      }
   console.log("LLLD",selectedValue)
    return(
    <>
    <h2 style={{width:'600px',display:'block',margin:'auto',marginTop:'40px'}}>Select a quiz from drop box below and write a request in the text box below so that we can entertain your query and recheck your selected quiz </h2>
    <div style={{width:'800px',margin:'auto',display:'block'}}>
    <div style={{marginTop:'30px'}}>
      <Select className="mt-4 col-md-6 col-offset-4"
        onChange={handlechangforstu}
        value={value}
        options={courses}
      />
      </div>
    <div style={{marginTop:'30px'}}>
      <Select className="mt-4 col-md-6 col-offset-4"
        onChange={handleChange}
        value={selectedValue}
        options={options}
      />
      </div>
      <input value={sendReq} onChange={(e)=>setSendReq(e.target.value)} className='inp' style={{height:'200px', width:'500px', marginTop:'30px',border:'1px solid blue', borderRadius:'10px'}} type="text" placeholder="Type recheck request for selected quiz"/>
      </div>
      <button type="submit" style={{marginTop:'30px',height:'30px',backgroundColor:'lightblue',marginLeft:'370px',borderRadius:'15px',width:'150px'}}>Submit Request</button>
    </>
    );
}

export default RecheckRequest
