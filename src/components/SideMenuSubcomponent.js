import React from 'react'
import "./SideMenuSubcomponent.css"
import { Card, CardContent, Typography } from '@mui/material'
const SideMenuSubcomponent = () => {
  return (
    <Card className='sideMenusubcomponent'>
        <CardContent>
            <div style={{display:"flex"}}>
                <div style={{width:"50px",height:"50px",background:"grey"}}>

                </div>
                <div>
                <Typography component="div" variant="h5">Hello</Typography>
            <Typography component="p">Hello</Typography>
                </div>
            </div>
           
        </CardContent>
    </Card>
  )
}

export default SideMenuSubcomponent;