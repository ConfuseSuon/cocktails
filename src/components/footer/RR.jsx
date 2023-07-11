import React from 'react'
import { useGlobalContext } from '../../context'
const RR = () => {
    const { cocktails, } = useGlobalContext();
    console.log(cocktails)
  return (
    <div> {

         cocktails.map((item)=>{
            return <h1 key={item.id}>{item.name}</h1>
        })
        } </div>
  )
}

export default RR