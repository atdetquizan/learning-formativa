import { IStudent } from "../interfaces/student.interface";

const StudentsList: IStudent[] = [
  {
    name: "Luis",
    surnames: "Lopez",
    avatar: "https://i.pravatar.cc/150?u=react",
    status: true,
    ocupacion: 'desarrollador front-end',
  },
  {
    name: "Frnando",
    surnames: "Torres",
    avatar: "https://i.pravatar.cc/150?u=react",
    status: true,
    ocupacion: 'analista de sistemas',
  },

  {
    name: "Pedro",
    surnames: "Salazar",
    avatar: "https://i.pravatar.cc/150?u=react",
    status: false,
    ocupacion: 'desarrollador back-end',
  },
];
export default StudentsList;
