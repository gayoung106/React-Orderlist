import React, {useMemo, memo} from 'react';

const Input = (props) => {
    const { width, height, backgroundColor, className, padding, margin, customStyle } = props;

    const style = useMemo(() => {
        return {
            width, height, backgroundColor, className, padding, margin, ...customStyle
        }
    }, [width, height, backgroundColor, className, padding, margin, customStyle])

    return (
        <input width={width} height={height} backgroundColor={backgroundColor}
             className={className} padding={padding} margin={margin} style={style} />
    )
}

export default memo(Input);