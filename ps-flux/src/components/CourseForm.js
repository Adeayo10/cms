import React from "react";
import TextInput, {SelectInput} from "./common/TextInput";
import PropTypes from "prop-types";
function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>      
        <TextInput
            id="title"
            label="Title"
            onChange={props.onChange}
            name="title"
            value={props.course.title}
            error={props.error.title}
        />
        <SelectInput
            id="author"
            label="Author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
            error={props.error.authorId}
        />
        <TextInput
            id="category"
            label="Category"
            name="category"
            onChange={props.onChange}
            value={props.course.category}
            error={props.error.category}
        />
        <input type="submit" value="Save" className="btn btn-primary" />
        <input type="submit" value="Delete" className="btn btn-danger" style={{margin:5}} />
    </form>
  );
}
CourseForm.proTypes={
    course:PropTypes.object.isRequired,
    onChange:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,
    error:PropTypes.object.isRequired
}
export default CourseForm;
