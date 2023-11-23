import "../App.css";
import Flag from 'react-world-flags';
import { Outlet, Link } from "react-router-dom";

function Languageselect() {

    return (
        <div>
            <nav>
                <h1>Language Select</h1>
                <button><Link to="/game/french"><Flag code="fra" height="32"/></Link></button>
                <button><Link to="/game/spanish"><Flag code="esp" height="32"/></Link></button>
            </nav>
            <Outlet />
        </div>
    );
}

export default Languageselect;