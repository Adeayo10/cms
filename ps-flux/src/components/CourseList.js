import React from "react";
function Renderow(course){
    return(
        <tr key={course.id}>
            <td className="table-secondary">{course.title}</td>
            <td>{course.authorId}</td>
            <td className="table-secondary">{course.category}</td>
        </tr>                        
    )  
}
function CourseList({course}){
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
            {course.map(course => Renderow(course))}
            </tbody>
        </table>
        </>
    );
}

export default CourseList;