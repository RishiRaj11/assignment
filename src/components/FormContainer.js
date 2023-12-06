import React from 'react'
import "./FormContainer.css"
const FormContainer = () => {
  return (
    <div className='form_container' >
        <div style={{background:"lightgreen",width: "716px",height:"150px"
}}>
         Form Header
        </div>
        <div style={{background:"white",width: "716px",height:"500px"}}>
          Form
        </div>
    </div>
  )
}

export default FormContainer