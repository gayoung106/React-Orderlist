import React, {useMemo} from 'react';
import './Text.css';

const Text = (props) => {
    const { content, fontSize, fontWeight, className, padding, margin, color, customStyle } = props;

    const style = useMemo(() => {
        return {
            content, fontSize, fontWeight,className, color,padding, margin, ...customStyle
        }
    }, [content, fontWeight, fontSize,padding, className, margin, color, customStyle])


    return (
        <span content={content} fontSize={fontSize} style={style} className={className} padding={padding} margin={margin} color={color} customstyle={customStyle} >
            {content}
        </span>
    )
}

export default Text;