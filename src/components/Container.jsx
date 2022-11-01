import PropTypes from 'prop-types';

export const Container=({children})=>{
    return (
        <div style={{maxWidth:1140,margin:'auto',padding:12}}>{children}</div>
    )
}

Container.propTypes={
    children:PropTypes.node.isRequired
}