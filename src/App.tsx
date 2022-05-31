import "./App.css";
import FooterSection from "./shared/components/FooterSection/FooterSection";
import Header from "./shared/components/Header/Header";
import ListCourses from "./shared/components/ListCourses/ListCourse";
import ListStudent from "./shared/components/ListStudent/ListStudent";

function App() {
  // const [courses, setCourses] = useState<ICourses[]>(CoursesList);
  return (
    <div className="App">
      <Header></Header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ListCourses></ListCourses>
          </div>
          <div className="col-md-6">
            <ListStudent></ListStudent>
          </div>
        </div>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
