import React, { useContext } from 'react'
import { BioData } from './CompA'

const CompC = ({name}) => {
    const channelName = useContext(BioData)
  return (
   <h2>Hello from  {channelName}</h2>
  )
}

export default CompC