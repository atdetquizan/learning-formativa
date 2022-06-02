import React from "react";
import "./App.css";
import Counter from "./shared/components/Counter/Counter";
import FooterSection from "./shared/components/FooterSection/FooterSection";
import Header from "./shared/components/Header/Header";
import ListCourses from "./shared/components/ListCourses/ListCourse";
import ListStudent from "./shared/components/ListStudent/ListStudent";

class App extends React.Component {
  // const [courses, setCourses] = useState<ICourses[]>(CoursesList);
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container mt-5">
          <div className="row justify-content-md-center">
            <div className="col-md-3">
              <Counter></Counter>
            </div>
            {/* <div className="col-md-6">
              <ListCourses></ListCourses>
            </div>
            <div className="col-md-6">
              <ListStudent></ListStudent>
            </div> */}
          </div>
        </div>
        {/* <FooterSection></FooterSection> */}
      </div>
    );
  }
}

export default App;
