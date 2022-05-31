import './CardCourse.css';
import { ICourses } from "../../../core";
import CardStatus from '../CourseStatus/CourseStatus';
import CardCategory from '../CardCategory/CardCategory';

function CardCourse({ avatar, name, description = 'Sin informaciòn', status, category }: ICourses) {
    return  <li className="card-course">
    <img src={avatar} alt="" />
    <h4>{name}</h4>
    <p>{description?.toUpperCase()}</p>
    <CardCategory category={category}></CardCategory>
    <CardStatus status={status}></CardStatus>
  </li>
}

export default CardCourse;