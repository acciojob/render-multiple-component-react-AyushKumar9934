import React from 'react'

const Proj = ({projName,projDesc}) => {
  return (
    <div>
        <h1 data-ns-test="project-name">{projName}</h1>
<h6 data-ns-test="project-description">{projDesc}</h6>
    </div>
  )
}

export default Proj