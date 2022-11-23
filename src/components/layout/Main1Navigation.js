import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";


function MainNavigation() {
    return (

        <header className={classes.header}>
            <div className={classes.logo}>React MeetUps near me
                <nav>
                    <ul>
                        <li>
                            <Link to="/all">All MeetUps</Link>
                        </li>
                        <li>
                            <Link to="new">New MeetUps</Link>
                        </li>
                        <li>
                            <Link to="fav">Favorites</Link>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )

}

export default MainNavigation;