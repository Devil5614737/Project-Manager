import { Form } from "react-bootstrap"
import PropTypes from 'prop-types';

export const Input=({type,...props})=>{
    return (
        <>
        <Form.Control className="mb-3" {...props} type={type}/>
        </>
    )
}


Input.propTypes={
    type:PropTypes.string.isRequired,
    props:PropTypes.object
}