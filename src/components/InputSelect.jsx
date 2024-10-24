import React from 'react'
import Select from 'react-select'

export const InputSelect = ({label, options, onChange}) => {
  return (
    <div className=''>
            <div className='text-xl font-medium pt-5'>
              {label}
            </div>
            <Select options={options} className='pt-2 w-80' onChange={onChange}/>
    </div>
  )
}
