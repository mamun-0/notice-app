import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import NoticePage from "./pages/Notice-Page/notice-page.component";
import FileContainer from "./Components/Files/FilesContainer/files-container.component";
//======2-1=====
import DldFlex from "./Components/OnlineClass/Video-card/dldFlex.component";
import StatisticsFlex from "./Components/OnlineClass/Video-card/statisticsFlex.component";
import MathFlex from "./Components/OnlineClass/Video-card/mathFlex.component";
import JavaFlex from "./Components/OnlineClass/Video-card/javaFlex.component";
import DataStructureFlex from "./Components/OnlineClass/Video-card/datastructureFlex.component";
//=======2-2=====
import DLDFlex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/degitalLogicDesign.component";
import AlgorithmsFlex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/algorithmsDesign";
import LawFlex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/law.component";
import ComputingFlex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/throryOfComputing.component";
import Math255Flex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/math.component";
import AccFlex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/acc.component";
import EdlFlex from "./Components/OnlineClass/Video-card/SecondYearSecondSemester/edl.component";
// Assignment Section
import Assignment21 from "./Components/Assignments/AssignmentCard/2-1/assignmentcard.component";
import Assignment22 from "./Components/Assignments/AssignmentCard/2-2/assignmentcard.component";
import Footer from "./Components/Footer/footer.component";
import { HashRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter basename='/'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />

        {/*===== 2-1==== */}
        <Route path='/cse-203-and-204' component={DldFlex} />
        <Route path='/math-videos' component={MathFlex} />
        <Route path='/javatechnology-videos' component={JavaFlex} />
        <Route path='/statistics-videos' component={StatisticsFlex} />
        <Route path='/datastructure-videos' component={DataStructureFlex} />

        {/* ======2-2===== */}
        <Route path='/digital-logic-design' component={DLDFlex} />
        <Route path='/cyber-law' component={LawFlex} />
        <Route path='/theory-of-Computing' component={ComputingFlex} />
        <Route path='/math-255' component={Math255Flex} />
        <Route path='/acc-255' component={AccFlex} />
        <Route path='/cse-258' component={EdlFlex} />
        <Route
          path='/algorithms-design-and-analysis'
          component={AlgorithmsFlex}
        />
        <Route path='/assignments-lab-2-1' component={Assignment21} />
        <Route path='/assignments-lab-2-2' component={Assignment22} />
        <Route path='/files' component={FileContainer} />
        <Route path='/notice' component={NoticePage} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
