import CoursesList from '../../../core/constants/Courses';
import CardCourse from '../CardCourse/CardCourse';
import './ListCourses.css';

function ListCourses() {
    return <ul className='list-courses'>
    {CoursesList.map((value, index) => (
     <CardCourse  {...value} />
    ))}
  </ul>
}

export default ListCourses;