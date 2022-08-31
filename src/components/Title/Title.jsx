import React from 'react'
import Text from '../Text/Text'

const Title = (props) => {
    const { content, sub } = props;

  return (
    <>
    <div className="title">
        <Text content={content} fontSize="25px" />
    </div>

    <div className="sub-title">
        {/* <img className="check" alt="check-logo" src="img/check.png" /> */}
        <span> - </span>
        <Text content={sub} fontSize="20px" margin="10px" />
    </div>
    </>
  )
}

export default Title