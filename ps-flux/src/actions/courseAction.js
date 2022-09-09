import { saveCourse } from "../api/courseApi";
import dispather from "../appDispather";
import * as courseApi from '../api/courseApi'

export function saveCourse(course){
    courseApi.saveCourse(course).then(savedCourse=>{
        dispather.dispatch({
            actionType:"SAVED_COURSE",
            course: savedCourse
        })
    })
}