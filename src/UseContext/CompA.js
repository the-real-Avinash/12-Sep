import React, { createContext } from 'react'
import CompB from './CompB';

const BioData = createContext();
const CompA = () => {


  return (
    <BioData.Provider value={"Avinash"}>
    <CompB/>
    </BioData.Provider>
  )
}

export default CompA
export { BioData };