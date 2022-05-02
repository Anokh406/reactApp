import React from 'react'
import { useParams } from 'react-router-dom'

function Nested() {
  const {id} = useParams()
  return (
    <div>Nested {id}</div>
  )
}

export default Nested