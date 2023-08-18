import React, { useContext } from 'react'
import { Context } from '../ContextApi/contextapi'

const Footer = () => {
    const {list,packed} = useContext(Context)
    const packedItems = packed.filter((item)=>item === true)
  return (
    <div className='flex items-center justify-center fixed bottom-0 h-[50px] w-full bg-blue-800'>
      {list.length === packedItems.length && list.length>0 ? <p className='text-white text-xl'>Congratulations !!! You have packed all the items </p> : <p className='text-white text-xl'> You have {list.length} items on your list and you have {packedItems.length} packed items</p>}
    </div>
  )
}

export default Footer
