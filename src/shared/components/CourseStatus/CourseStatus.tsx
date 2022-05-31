import './CourseStatus.css';

function CardStatus(props: { status: boolean }) {
    return <span className={props.status ? 'course-status-active' : 'course-status-inactive'}></span>
}

export default CardStatus;