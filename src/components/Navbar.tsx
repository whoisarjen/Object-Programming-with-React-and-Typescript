import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Navbar: FunctionComponent = () => {
    return (
        <div className="navbar">
            <Link to="/deposit"><a>Deposit</a></Link>
            <Link to="/withdraw"><a>Withdraw</a></Link>
            <Link to="/check-history"><a>Check history</a></Link>
            <Link to="/loan"><a>Loan</a></Link>
            <Link to="/transfer"><a>Transfer</a></Link>
        </div>
    )
}

export default Navbar;