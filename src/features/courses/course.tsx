import React from "react";
import { CourseForm } from "./course-form/course-from";
import { CourseList } from "./courses-list/CourseList";

export class Course extends React.Component {
    render() {
        return <div>
            <CourseForm />
            <CourseList />
        </div>
    }
}