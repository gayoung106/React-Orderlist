import React, { useMemo, memo} from 'react'

const CheckBox = (props) => {

    const {defaultChecked, width, height, backgroundColor, className, name, padding, margin, customStyle } = props;

    const style = useMemo(() => {
        return {
            defaultChecked, width, height, backgroundColor, className, name, padding, margin, ...customStyle
        }
    }, [defaultChecked, width, height, backgroundColor, className, name, padding, margin, customStyle])

  return (
 <input type="checkbox" defaultChecked={defaultChecked} width={width} height={height} backgroundColor={backgroundColor}
        className={className} name={name} padding={padding} margin={margin} style={style} >

        </input>
  )
}

export default memo(CheckBox);