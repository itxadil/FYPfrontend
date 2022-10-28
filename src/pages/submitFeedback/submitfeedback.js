import React ,{useState} from "react";
import Select from 'react-select'
function SubmitFeedback(){
    const [option,setoption]=useState('option1')
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
        { value: 'i192150', label: 'Quiz1' },
        { value: 'i190595', label: 'Quiz2' },
        { value: 'i191973', label: 'Quiz3' }
      ]
      const options1 = [
        { value: 'eng101', label: 'English' },
        { value: 'CS102', label: 'Programming' },
        { value: 'MM101', label: 'Management' }
      ]
      const options2 = [
        { value: 'teacher101', label: 'Asim Umar' },
        { value: 'teacher102', label: 'Hassan Ansaari' },
        { value: 'teacher103', label: 'Adil Ali' }
      ]
      const [sendReq,setSendReq]=useState('')
      const [selectedValue,setSelectedValue]=useState({
        label:'Select a Quiz',
        value:0
      })
      const handleChange=(e)=>{
        setSelectedValue(e)
      }

      const [selectedValue1,setSelectedValue1]=useState({
        label:'Select a Course',
        value:0
      })
      const handleChange1=(e)=>{
        setSelectedValue(e)
      }

      const [selectedValue2,setSelectedValue2]=useState({
        label:'Select a Teacher',
        value:0
      })
      const handleChange2=(e)=>{
        setSelectedValue(e)
      }
    console.log("FFFF",option)
    return(
        <>
            <div style={{marginTop:'20px'}}>
               <div style={{width:'300px',display:'block',margin:'auto'}}>
                <input style={{height:'15px',width:'20px'}} type="radio" id="child" name="age" value="option1" onChange={(e)=>{
                    setoption('option1')
                }}/>
                <label style={{marginLeft:'10px'}} for="child">Submit feedback for a quiz</label><br/>
                {/* <input style={{height:'15px',width:'20px'}} type="radio" id="adult" name="age" value="option2" onChange={(e)=>{
                    setoption('option2')
                }}/>
                <label style={{marginLeft:'10px'}} for="adult">Submit feedback for course</label><br/> */}
                <input style={{height:'15px',width:'20px'}} type="radio" id="adult1" name="age" value="option3" onChange={(e)=>{
                    setoption('option3')
                }}/>
                <label style={{marginLeft:'10px'}} for="adult1">Submit feedback for a teacher</label><br/>
             </div>
             <div>
             <div style={{width:'800px',margin:'auto',display:'block'}}>
             <div style={{marginTop:'30px'}}>
            <Select className="mt-4 col-md-6 col-offset-4"
              onChange={handlechangforstu}
              value={value}
              options={courses}
            />
            </div>
           <div style={{marginTop:'30px'}}>
          { (option==='option1') ? <Select className="mt-4 col-md-6 col-offset-4"
                onChange={handleChange}
                value={selectedValue}
                options={options}
            /> : (option==='option2') ? <Select className="mt-4 col-md-6 col-offset-4"
                onChange={handleChange1}
                value={selectedValue1}
                options={options1}
            /> : (option==='option3') ? <Select className="mt-4 col-md-6 col-offset-4"
                onChange={handleChange2}
                value={selectedValue2}
                options={options2}
            /> : console.log('none')
          }
            </div>
            <input value={sendReq} onChange={(e)=>setSendReq(e.target.value)} className='inp' style={{height:'200px', width:'500px', marginTop:'30px',border:'1px solid blue', borderRadius:'10px'}} type="text" placeholder="Type your feedback"/>
            </div>
            <button type="submit" style={{marginTop:'30px',height:'30px',backgroundColor:'lightblue',marginLeft:'370px',borderRadius:'15px',width:'150px'}}>Submit feedback</button>
             </div>
            </div>
        </>
    );
}
export default SubmitFeedback