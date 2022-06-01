import "./CardCourse.css";
import { ICourses } from "../../../core";
import CardStatus from "../CourseStatus/CourseStatus";
import CardCategory from "../CardCategory/CardCategory";
import { Fragment, useState } from "react";

function CardCourse({
  index,
  avatar,
  name,
  description = "Sin informaciòn",
  status,
  category,
  owner,
}: ICourses) {

  const [actived, setActived] = useState<boolean>(false);

  const onClickCardCouse = (e: any) => {
    // document.querySelector(`#course-item-${index}`)?.classList.toggle('card-course-background');
    setActived(!actived);
  };
  // const onFocusInput = (e: any) => {
  //   console.log('onFocusInput', e, index);
  // };
  // const onBlurInput = (e: any) => {
  //   console.log('onBlurInput', e, index);
  // };
  // const onChangeInput = (e: any) => {
  //   console.log('onChangeInput', e, index);
  // };
  // const onKeyDownInput = (e: any) => {
  //   console.log('onKeyDownInput', e, index);
  // };
  // const onKeyUpInput = (e: any) => {
  //   console.log('onKeyUpInput', e, index);
  // };
  const onMouseOver = (e: any) => {
    // console.log('onMouseDown', e, index);
  };
  // const classNamesCourse = 'card-course';
  
  return (
    <Fragment key={index}>
      <li className={'card-course' + (actived ? ' card-course-red' : '')} onClick={onClickCardCouse} onMouseOver={onMouseOver} id={'course-item-' + index?.toString()}>
        <img src={owner?.avatar_url} alt="" />
        <h4>{name}</h4>
        <p>{description?.toUpperCase()}</p>
        <CardCategory category={category}></CardCategory>
        <CardStatus status={status}></CardStatus>
        <input
          type="text"
          name="course"
          // onFocus={onFocusInput}
          // onBlur={onBlurInput}
          // onChange={onChangeInput}
          // onKeyDown={onKeyDownInput}
          // onKeyUp={onKeyUpInput}
        />
      </li>
    </Fragment>
  );
}

export default CardCourse;
