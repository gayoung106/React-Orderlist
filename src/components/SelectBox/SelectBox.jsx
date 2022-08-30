import React, {useMemo, memo} from 'react';
import './SelectBox.css'



const SelectBox = (props) => {
    const { disabled, width, height, backgroundColor, className, padding, margin, fontFamily, customStyle } = props;

    const style = useMemo(() => {
        return {
            disabled, width, height, backgroundColor, className, padding, margin, fontFamily, ...customStyle
        }
    }, [disabled, width, height, backgroundColor, className, padding, margin, fontFamily, customStyle])


    return (
        <select disabled={disabled} width={width} height={height} backgroundColor={backgroundColor}
        className={className} padding={padding} margin={margin} fontFamily={fontFamily} style={style}>
            {props.options.map((option) => (
                <option
                    key={option.id}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default memo(SelectBox);