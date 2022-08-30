import React, {useMemo, memo} from 'react';
import './SelectBox.css'



const SelectBox = (props) => {
    const { disabled, width, height, backgroundColor, className, padding, margin, customStyle } = props;

    const style = useMemo(() => {
        return {
            disabled, width, height, backgroundColor, className, padding, margin, ...customStyle
        }
    }, [disabled, width, height, backgroundColor, className, padding, margin, customStyle])


    return (
        <select disabled={disabled} width={width} height={height} backgroundColor={backgroundColor}
        className={className} padding={padding} margin={margin} style={style}>
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