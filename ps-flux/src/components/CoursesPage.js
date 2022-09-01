import React from "react";
import {getCourses} from "../api/courseApi";

class CoursesPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            courses:[]
        };
    }
    componentDidMount(){
        getCourses().then(course=>this.setState({courses:course})).catch(err =>  new Error(err))
    };
    renderRow(course){
        return(
            <tr key={course.id}>
                <td className="table-secondary">{course.title}</td>
                <td>{course.authorId}</td>
                <td className="table-secondary">{course.category}</td>
            </tr>                        
        )  
    }

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

export default CoursesPage;