import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/common/Header";
import CoursesPage from "./pages/CoursesPage";

function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/courses") return <CoursesPage />
    return <HomePage />;
}

function App() {

useEffect(() => {
  document.title = String.raw `Course Management System on page ${window.location.pathname}`;
  
}, [])

  return (
    <div className="container-fluid">
      <Header/>
      {getPage()}
    </div>
  );
} 

export default App;
