import React, {useEffect, useState} from "react";
import {getCourses} from "../api/courseApi";
import CourseList from "../components/CourseList";


function CoursePage(){
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        getCourses().then(response => setCourses(response)).catch(error => new Error(error))
    },[])
    
    return( 
    
        <CourseList course={courses} />
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

