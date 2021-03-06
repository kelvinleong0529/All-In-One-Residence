import AddStudent from "./Residence/AddStudent";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Announcement from "./Announcement/Announcement";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentDetails from "./Residence/StudentDetails";
import Facilities from "./Pages/Facilities"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" >
            {/* match exactly (same case) */}
            <Home />
            </Route>
            <Route path="/facilities" component={Facilities}>
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
