import React from 'react'
import { ClipLoader } from 'react-spinners';

const Spinner = ({loading}) => {
  return (
    <div className="flex items-center justify-center w-full h-[300px]">
    <ClipLoader color="rgb(3 7 18)" loading={loading} size={50} />
  </div>
  )
}

export default Spinner