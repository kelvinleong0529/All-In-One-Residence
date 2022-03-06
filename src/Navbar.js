import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/addstudent" className="nav-link">Add Student</Link>
                    <Link to="/sortbymarks" className="nav-link">Marks Ranking</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;