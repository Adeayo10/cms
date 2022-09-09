import React from "react";
import PropTypes from 'prop-types'

export function SelectInput(props){
let wrapperClass = "form-group"; 
  return(
    <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.value}
            className="form-control"
            error={props.error}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
            <option value="3">Dan Wahlin</option>
            
          </select>
          {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    </div>
  )
}
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
          error={props.error}
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
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