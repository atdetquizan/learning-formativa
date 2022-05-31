import CategoryType from "../enum/category-type.enum";
import { ICourses } from "../interfaces";

const CoursesList: ICourses[] = [
  {
    name: "ReactJS",
    precio: 30,
    avatar: "https://i.pravatar.cc/150?u=react",
    description: "Curso de desarrollo Front-End",
    status: false,
    category: CategoryType.FRONT_END
  },
  {
    name: "VueJS",
    precio: 30,
    avatar: "https://i.pravatar.cc/150?u=vuejs",
    description: "Curso de desarrollo Front-End",
    status: true,
    category: CategoryType.FRONT_END
  },
  {
    name: "Angular",
    precio: 30,
    avatar: "https://i.pravatar.cc/150?u=angular",
    status: false,
    category: CategoryType.FRONT_END
  },
  {
    name: "PHP",
    precio: 30,
    avatar: "https://i.pravatar.cc/150?u=php",
    status: false,
    category: CategoryType.BACK_END
  },
];
export default CoursesList;