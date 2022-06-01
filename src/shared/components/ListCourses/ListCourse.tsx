import { Component } from "react";
import CoursesList from "../../../core/constants/Courses";
import CardCourse from "../CardCourse/CardCourse";
import "./ListCourses.css";

class ListCourses extends Component<any, { courseList: any[] }> {
  constructor(props: any) {
    super(props);
    this.showCourse();
    this.state = {
      courseList: []
    }
  }

  render() {
    return (
      <ul className="list-courses">
        {this.state.courseList.map((value, index) => (
          <CardCourse {...{ ...value, index }} />
        ))}
      </ul>
    );
  }

  async showCourse() {
    const course = await fetch('https://api.github.com/users/atdetquizan/repos', { method: 'GET' });
    const response = await course.json();
    console.log(response);
    this.setState({  courseList: response })
  }
}

export default ListCourses;
