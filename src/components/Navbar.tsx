import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Navbar: FunctionComponent = () => {
    return (
        <div className="navbar">
            <Link to="/"><a>Home</a></Link>
            <Link to="/deposit"><a>Deposit</a></Link>
        </div>
    )
}

export default Navbar;