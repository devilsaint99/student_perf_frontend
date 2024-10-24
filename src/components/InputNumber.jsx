import { useRef } from "react"

export const InputNumber = ({label, placeholder, onChange})=>{
    return(
        <div className=''>
            <div className='text-xl font-medium pt-5'>
              {label}
            </div>
            <div>
              <input className="rounded border outline-none border-gray-400  pl-2 mt-2 w-80 min-h-9 focus:ring-blue-500 focus:border-2 focus:border-blue-500" type="number" min={0} max={100} placeholder={placeholder} onChange={onChange} />
            </div>
            
            
    </div>
    )
}