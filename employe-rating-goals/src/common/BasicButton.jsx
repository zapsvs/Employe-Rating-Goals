import { Button } from '@mui/material'
import React from 'react'

function BasicButton({
    label,
    variant,
    sx
}) {
  return (
    <Button sx={sx} variant={variant}>{label}</Button>
)
}

export default BasicButton