import "./CardStudent.css";
import CardStatus from "../CourseStatus/CourseStatus";
import { IStudent } from "../../../core/interfaces/student.interface";
import { useEffect, useState } from "react";

function CardStudent({ avatar, name, status, ocupacion }: IStudent) {

  const [actived, setActived] = useState<boolean>(false);

  useEffect(() => {
    setActived(status);
  }, [status])

  const onClickStudent = () => {
    setActived(!actived);
  };

  return (
    <li className="card-student" onClick={onClickStudent}>
      <div className="card-student-image">
        <img src={avatar} alt="" />
      </div>
      <div className="card-student-info">
        <h4>{name}</h4>
        <small>{ocupacion}</small>
      </div>
      <CardStatus status={actived}></CardStatus>
    </li>
  );
}

export default CardStudent;
