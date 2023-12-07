import React from 'react'
import Enquiry from './Enquiry'
import FormPageThird from './FormPageThird'
import Footer from './Footer'
const StatementOfPurpose = () => {
  return (
  <>
      <div className='home'>
      <div className='form_container' >
        <div style={{
          background: "var(--blue-15, rgba(26, 143, 230, 0.15))", width: "716px", height: "140px"
        }}>
          <Enquiry />
        </div>
        <div style={{ background: "white", width: "716px", height: "500px" }}>
          <FormPageThird />
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default StatementOfPurpose