import React from 'react'
import Herocontent from "./content/page"

const page = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video 
        autoPlay
        loop
        muted
        className='rotate-180 h-full w-full absolute top-[-340px] left-0 object-cover'
        >
            <source src="blackhole.webm" type='video/webm' />
        </video>
<Herocontent/>

    </div>
  )
}

export default page