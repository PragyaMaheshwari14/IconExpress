import React from 'react'
import { Button } from './ui/button'
import { Download} from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
         <h1 className='text-[#F15757] font-extrabold'>IconExpress </h1>
         <Button className='flex gap-2 items-center ' onClick={()=>DownloadIcon(Date.now())}> 
          <Download className='h-4 w-4'/>Download</Button>
    </div>
  )
}

export default Header
