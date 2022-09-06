import React from "react";
import PropTypes from 'prop-types'

function TextInput(props) {

    let wrapperClass = "form-group";
    if(props.error.length > 0){
        wrapperClass += " has-error"
    }
    return(
        <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            label="Title"
            name={props.name}
            className="form-control"
            onChange={props.onChange}
            
            value={props.value}
          />
        </div>
        {props.error && <h1 className="alert alert-danger">{props.error}</h1>}
      </div>
    );

    
}

TextInput.propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string,
    error:PropTypes.string
    
};

TextInput.defaultProps={
    error:""
}

export default TextInput;