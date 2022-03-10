import AddStudent from "./Student/AddStudent";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Announcement from "./Announcement/Announcement";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentDetails from "./Student/StudentDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {" "}
              {/* match exactly (same case) */}
              <Home />
            </Route>
            <Route path="/addstudent">
              <AddStudent />
            </Route>
            <Route path="/student/:id">
              <StudentDetails />
            </Route>
            <Route path="/announcement">
              <Announcement />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
