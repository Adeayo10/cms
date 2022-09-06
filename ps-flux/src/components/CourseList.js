import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function CourseList(props){
    return( 
        <>
    
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="table-dark">Title</th>
                    <th>Author ID</th>
                    <th className="table-dark">Category</th>
                </tr>
            </thead>
            <tbody >
                {props.course.map(course => 
                    { return ( 
                        <tr key={course.id}>
                            <td className="table-secondary"><Link to={`/course/${course.slug}`}>{course.title}</Link></td>
                            <td>{course.authorId}</td>
                            <td className="table-secondary">{course.category}</td>
                        </tr> 
                        )
                    })
                }
            </tbody>
        </table>
        </>
    );
}
CourseList.propTypes = {
    course:PropTypes.array.isRequired
}
export default CourseList;

/*PropTypes.shape(
        {
            id:PropTypes.number.isRequired
        }
    ) */
