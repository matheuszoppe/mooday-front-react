import React from 'react'
import { SubmitButton } from './Buttons/SubmitButton'
import Input from './Input'

const Form = ({inputs}) => {
  
  return (    
    
    <form >
      {inputs.map((item)=>{
        return(
          <Input key={item.id} id={item.id} type={item.type} placeholder={item.placeholder} title={item.title}/>
        )
      })}  
      
      <SubmitButton name="Continuar"/>
    </form>
  )
}

export default Form
