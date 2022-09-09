import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/common/Header";
import CoursesPage from "./pages/CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import ManageCoursePage from "./pages/ManageCoursePage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
useEffect(() => {
  document.title = String.raw `Course Management System on page ${window.location.pathname}`;
  
}, [])
  return (
    <div className="container-fluid">
      <Header/>
      <ToastContainer autoClose={3000} hideProgressBar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/course/:slug" component={ManageCoursePage}/>
        <Route path="/course/" component={ManageCoursePage}/>
        <Redirect from="/about-user" to="about">
        </Redirect>  
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
} 

export default App;
