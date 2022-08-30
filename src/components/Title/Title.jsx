import React from 'react'
import Text from '../Text/Text'

const Title = () => {
  return (
    <>
    <div className="title">
        <Text fontSize="25px" />
    </div>

    <div className="sub-title">
        <img className="check" alt="check-logo" src="img/check.png" />
        <Text fontSize="20px" margin="10px" />
    </div>
    </>
  )
}

export default Title