
import React from 'react'
import { TextField, Typography } from '@mui/material';

function BasicTextField(
  {label,placeHolder}
) {
  return (
    <div>
      <Typography sx={{color:"white",fontSize:"14px"}} variant="subtitle2">{label}</Typography>
         <TextField
         fullWidth
         sx={{backgroundColor:"white"}}
          id="outlined-size-small"
          placeholder={placeHolder}
          size="small"
        />
    </div>
  )
}

export default BasicTextField