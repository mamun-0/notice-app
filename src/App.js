import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import ClsSchedulePage from "./pages/Class-schedule/class-schedule.component";
import NoticePage from "./pages/Notice-Page/notice-page.component";
import SyllabusPage from "./pages/Syllabus/syllabus.component";
import StatisticsFlex from "./Components/OnlineClass/Video-card/statisticsFlex.component";
import MathFlex from "./Components/OnlineClass/Video-card/mathFlex.component";
import JavaFlex from "./Components/OnlineClass/Video-card/javaFlex.component";
import DataStructureFlex from "./Components/OnlineClass/Video-card/datastructureFlex.component";
import Footer from "./Components/Footer/footer.component";
import { HashRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter basename='/'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/math-videos' component={MathFlex}/>
        <Route path='/datastructure-videos' component={DataStructureFlex}/>
        <Route path='/javatechnology-videos' component={JavaFlex}/>
        <Route path='/statistics-videos' component={StatisticsFlex}/>
        <Route path='/class-schedule' component={ClsSchedulePage} />
        <Route path='/files' component={SyllabusPage} />
        <Route path='/notice' component={NoticePage} />
      </Switch>
      <Footer/>
    </HashRouter>
  );
}

export default App;
