import React from "react";
import CourseForm from "../components/CourseForm";
import { useState, useEffect } from "react";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

function ManageCoursePage(props){
  const [errors, setErrors] = useState({})
  const[course, setCourse] = useState({
    id:null,
    slug:"",
    title:"",
    authorId:null,
    category:""
  })
  useEffect(()=>{
    const slug = props.match.params.slug // from the path `/course/:slug`
    if(slug){
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course))
    }
  },[props.match.params.slug])
  
  function formValidation(){
    const _errors = {};

    if(!course.title) _errors.title = ("Title is required")
    if(!course.authorId) _errors.authorId =("AuthorId is required")
    if(!course.category) _errors.category =("Category is required")

    setErrors(_errors)

    return Object.keys(_errors).length === 0 ;
  }

  function handleChange({target}){
   setCourse({...course, [target.name]:target.value});
  }
  
function handleSubmit(event){
    event.preventDefault();
    if(!formValidation())return;   
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses")
      toast.success('Course Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });
    
  }
   
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} error={errors} onChange={handleChange} onSubmit={handleSubmit}/>
    </>
  )
}
export default ManageCoursePage;