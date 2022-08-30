import React from 'react'
import Text from '../Text/Text'

const MainTitle = (props) => {


  return (
    <div className="title">
        
        
       <Text content={props.menus} fontSize="25px" />
    
   
    </div>
    );
};

export default MainTitle