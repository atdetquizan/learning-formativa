import React, { useState } from "react";
import "./App.css";
import { ICourses } from "./core";
import Footer from "./footer";
import CardCourse from "./shared/components/CardCourse/CardCourse";

function App() {
  const [courses, setCourses] = useState<ICourses[]>([
    {
      name: "ReactJS",
      precio: 30,
      avatar: "https://i.pravatar.cc/150?u=react",
      description: "Curso de desarrollo Front-End",
      status: false,
      // category: CategoryType.FRONTEND
    },
    {
      name: "VueJS",
      precio: 30,
      avatar: "https://i.pravatar.cc/150?u=vuejs",
      description: "Curso de desarrollo Front-End",
      status: true,
      // category: CategoryType.FRONTEND
    },
    {
      name: "Angular",
      precio: 30,
      avatar: "https://i.pravatar.cc/150?u=angular",
      status: false,
      // category: CategoryType.FRONTEND
    },
    {
      name: "PHP",
      precio: 30,
      avatar: "https://i.pravatar.cc/150?u=php",
      status: false,
      // category: CategoryType.BACKEND
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {courses.map((value, index) => (
           <CardCourse  value={value} position={index} />
          ))}
        </ul>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
