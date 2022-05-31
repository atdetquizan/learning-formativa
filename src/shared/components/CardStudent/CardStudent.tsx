import "./CardStudent.css";
import CardStatus from "../CourseStatus/CourseStatus";
import { IStudent } from "../../../core/interfaces/student.interface";

function CardStudent({ avatar, name, status, ocupacion }: IStudent) {
  return (
    <li className="card-student">
      <div className="card-student-image">
        <img src={avatar} alt="" />
      </div>
      <div className="card-student-info">
        <h4>{name}</h4>
        <small>{ocupacion}</small>
      </div>
      <CardStatus status={status}></CardStatus>
    </li>
  );
}

export default CardStudent;
