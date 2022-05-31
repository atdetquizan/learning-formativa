import StudentsList from '../../../core/constants/Students';
import CardStudent from '../CardStudent/CardStudent';
import './ListStudent.css';

function ListStudent() {
    return <ul className='list-student'>
        {StudentsList.map((value) => <CardStudent  {...value} /> )}
    </ul>
}

export default ListStudent;