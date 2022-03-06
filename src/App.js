import AddStudent from './AddStudent';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StudentDetails from './StudentDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/addstudent">
              <AddStudent/>
            </Route>
            <Route path="/student/:id">
              <StudentDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
