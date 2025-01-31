import React from 'react'
import { z } from 'zod'

const formschema = z.object({
  firstname:z.string().min(2).max(50),
})

const contactform = () => {
  return (
    <div>
      
    </div>
  )
}

export default contactform
