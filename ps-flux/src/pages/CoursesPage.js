import React, {useEffect, useState} from "react";
import * as courseApi from "../api/courseApi";
import CourseList from "../components/CourseList";
import * as authorApi from "../api/authorApi"
import { Link } from "react-router-dom";

//using _courses to chage same value words {courses:_courses}
function CoursePage(){
    const [courses, setCourses] = useState([])
    const [authors, setAuthors] = useState([])
    
    useEffect(() => {
        courseApi.getCourses().then(response => setCourses(response)).catch(error => new Error(error))
        authorApi.getAuthors().then(response => setAuthors(response)).catch(error => new Error(error))
    },[])
    
    return( 
        <React.Fragment>
        <h2 cl>Courses</h2>
        <Link to="/course" className="btn btn-primary my-2">
            Add CourseList
        </Link>
        <CourseList course={courses} author={authors}/>
        </React.Fragment>
    )
    
    
}
export default CoursePage;

/*class CoursesPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            courses:[]
        };
    }
    
    renderRow(course){
        return(
            <tr key={course.id}>
                <td className="table-secondary">{course.title}</td>
                <td>{course.authorId}</td>
                <td className="table-secondary">{course.category}</td>
            </tr>                        
        )  
    }

    componentDidMount(){
        getCourses().then(course=>this.setState({courses:course})).catch(err =>  new Error(err))
    };
 
    render(){
        return( 
        <>
        <h2>Courses</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="table-dark">Title</th>
                    <th>Author ID</th>
                    <th className="table-dark">Category</th>
                </tr>
            </thead>
            <tbody >
                {this.state.courses.map(this.renderRow)}
            </tbody>

        </table>
        </>
        )
    }
}
export default CoursesPage;*/

