import './CardCourse.css';
import { ICourses } from "../../../core";
import CourseStatus from '../CourseStatus/CourseStatus';

function CardCourse(props: {value: ICourses, position: number}) {
    return  <li className="card-course">
    <img src={props.value.avatar} alt="" />
    <h4>{props.value.name}</h4>
    <p>{props.value.description?.toUpperCase()}</p>
    <CourseStatus status={props.value.status}></CourseStatus>
  </li>
}

export default CardCourse;