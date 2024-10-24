import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { InputSelect } from './components/InputSelect'
import { InputNumber } from './components/InputNumber'

function App() {
  const [pred, setPred] = useState(-1)
  const [genderS, setGenderS] = useState('')
  const [race, setRace] = useState('')
  const [parentEdu, setParentEdu] = useState('')
  const [lunchS, setLunchS] = useState('')
  const [testPrep, setTestPrep] = useState('')
  const [reading, setReading] = useState(-1)
  const [writing, setWriting] = useState(-1)

  const gender = [
    {
      value: 'male', label: 'Male'
    },
    {
      value: 'female', label: 'Female'
    }
  ]

  const race_ethnicity = [
    {
      value: 'group A', label: 'Group A'
    },
    {
      value: 'group B', label: 'Group B'
    },
    {
      value: 'group C', label: 'Group C'
    },
    {
      value: 'group D', label: 'Group D'
    }
  ]

  const parental_level_of_education = [
    {
      value: "bachelor's degree", label: "Bachelor's"
    },
    {
      value: "some college", label: "Some College"
    },
    {
      value: "master's degree", label: "Masters"
    },
    {
      value: "associate's degree", label: "Assoicate"
    },
    {
      value: "high school", label: "High School"
    },
    {
      value: "some high school", label: "Some High School"
    }

  ]

  const lunch = [
    {
      value: "standard", label: "Standard"
    },
    {
      value: "free/reduced", label: "Free or Reduced"
    }
  ]

  const test_preparation_course = [
    {
      value: "completed", label: "Completed"
    },
    {
      value: "none", label: "None"
    }
  ]


  return (
    <div>
      <div className='bg-white flex place-content-center'>
      <div className='mt-3 rounded-lg p-3 shadow-md h-max'>
        <div className='text-black font-semibold text-5xl pt-2'>
          Student's Maths Score Predictor
        </div>
        <div className='grid grid-cols-2'>
          <InputSelect label={'Gender'} options={gender} onChange={(e)=>{
            setGenderS(e.value)
          }}/>
          <InputSelect label={'Race or Ethnicity'} options={race_ethnicity} onChange={(e)=>{
            setRace(e.value)
          }}/>
          <InputSelect label={'Parental Level Of Education'} options={parental_level_of_education} onChange={(e)=>{
            setParentEdu(e.value)
          }}/>
          <InputSelect label={'Lunch'} options={lunch} onChange={(e)=>{
            setLunchS(e.value)
          }}/>
          <InputSelect label={'Test Preparation Course'} options={test_preparation_course} onChange={(e)=>{
            setTestPrep(e.value)
          }}/>
          <InputNumber label={'Reading Score'} placeholder={'Reading Score b/w 0-100'} onChange={(e)=>{
            setReading(e.target.value)
          }}/>
          <InputNumber label={'Writing Score'} placeholder={'Writing Score b/w 0-100'} onChange={(e)=>{
            setWriting(e.target.value)
          }}/>
          <button type='submit' className='w-80 h-11 mt-12 text-yellow-50 rounded-xl bg-gray-950' onClick={()=>{
            axios.post('http://localhost:5000/prediction',{
          
              "message":{
                "gender": genderS,
                "race_ethnicity" : race,
                "parental_level_of_education" : parentEdu,
                "lunch" : lunchS,  
                "test_preparation_course": testPrep,
                "reading_score": reading,
                "writing_score": writing
              }
              }).then((response)=>{
                setPred(response.data)
              }).catch((error)=>{
                console.error(error)
              })
          }}>Predict</button>
        </div>
      </div>
    </div>  
    <div className='bg-white flex place-content-center text-2xl mt-10'>
      {pred==-1?<></>:<div className='flex'>I think student will score: <div className='font-medium ml-1'>{pred}</div></div>}
    </div>
    </div>
    
  )
}

export default App
