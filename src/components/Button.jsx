import {Button as Btn} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Button=({title,variant,width,...props})=>{
    return (
        <Btn className={`${width} btn-sm`} variant={variant}  {...props}>{title}</Btn>
    )
}


Button.propTypes={
    title:PropTypes.string.isRequired,
    variant:PropTypes.string.isRequired,
    props:PropTypes.object
}