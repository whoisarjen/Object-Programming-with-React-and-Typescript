import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Navbar: FunctionComponent = () => {
    return (
        <div className="navbar">
            <Link to="/deposit">Deposit</Link>
            <Link to="/withdraw">Withdraw</Link>
            <Link to="/check-history">Check</Link>
            <Link to="/loan">Loan</Link>
            <Link to="/transfer">Transfer</Link>
        </div>
    )
}

export default Navbar;