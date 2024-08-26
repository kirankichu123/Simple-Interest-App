import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';



function App() {
 const [Principle,setPrinciple] = useState(0)
 const [Rate,setRate] = useState(0)
 const [Year,setYear] = useState(0)
 const [Intrest,SetIntrest] = useState(0)

 const [isPrincipleInvalid,setisPrincipleInvalid] = useState(false)
 const [isRateInvalid,setisRateInvalid] = useState(false)
 const [isYearInvalid,setisYearInvalid] = useState(false)


 // input Validation Functon
  const validateInput = (inputTag)=>{





  // Object Destructuring , const {key1,key2} = Object-name
  const {name,value} = inputTag  
  console.log(name,value);
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/)); // the "!!" converts the expression to a boolean "\d" is used to check numbers from 0-9. The "^" starting and "$" marks the ending. The '+' means there should be a number after the "."
  console.log(!!value.match(/^\d*\.?\d+$/));
  if(name == "Principle"){
    setPrinciple(value)
    !!value.match(/^\d*\.?\d+$/)? setisPrincipleInvalid(false):setisPrincipleInvalid(true)
  }else if(name == "Rate"){
    setRate(value)
    !!value.match(/^\d*\.?\d+$/)? setisRateInvalid(false):setisRateInvalid(true)

  }else if(name == "TimePeriod"){
    setYear(value)
    !!value.match(/^\d*\.?\d+$/)? setisYearInvalid(false):setisYearInvalid(true)
  }
  
 }


  const calculate = (e)=>{
    e.preventDefault()
    console.log("Inside Calculate Function");
    if(Principle && Rate && Year){
      SetIntrest(Principle*Rate*Year/100)
    }else{
      alert("Please Fill The form Completly!!!")
    }
    
  }
  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    SetIntrest(0)
    setisPrincipleInvalid(false)
    setisRateInvalid(false)
    setisYearInvalid(false)
  }



  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h1 > Simple Interst Calculator</h1>
      <p>Calculate your simple Interst Easily</p>
      <div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3 rounded'>
        <h1>₹ {Intrest}</h1>
        <p className='fw-bolder'>Total Simple Interst</p>
      </div>
      <form className='mt-5' action="">
         <div className='mb-3'>
         <TextField value={Principle || ""} onChange={e=>(validateInput(e.target))} name='Principle' id="outlined-basic" className='w-100' label="₹Principle Amount" variant="outlined" />
         </div>

         {
          isPrincipleInvalid &&
         <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
         }

         <div className='mb-3'>
         <TextField value={Rate || ""} onChange={e=>(validateInput(e.target))} name='Rate' id="outlined-basic1" className='w-100' label="₹Rate Of Interest (p/a)%" variant="outlined" />
         </div>
         {
          isRateInvalid &&
         <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
         }
         <div className='mb-3'>
         <TextField value={Year || ""} onChange={e=>(validateInput(e.target))} name='TimePeriod' id="outlined-basic2" className='w-100' label="Time Period" variant="outlined" />
         </div>
         {
          isYearInvalid &&
         <div className="mb-3 text-danger fw-bolder">Invalid Year</div>
         }
        <Stack direction="row" spacing={2}>
          <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={calculate} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">
            Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">
            Reset</Button>

        </Stack>
      </form>
      </div>
    </div>
  )
}

export default App