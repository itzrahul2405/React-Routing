// const MainHeader = () => {
//     return(
//         <ul>
//             <li>
//                 <a href="/Product">Product</a>
//             </li>
//             <li>
//                 <a href="/Welcome">Welcome</a>
//             </li>
//         </ul>
//     );
// }

// export default MainHeader;












// Link is a basic navigation component, while NavLink extends Link with additional features for styling and handling the "active" state, making it suitable for navigation menus with dynamic styles.

// import { Link } from "react-router-dom";

// const MainHeader = () => {
//     return(
//         <ul>
//             <li>
//                 <Link to="/Product">Product</Link>
//             </li>
//             <li>
//                 <Link to="/Welcome">Welcome</Link>
//             </li>
//         </ul>
//     );
// }

// export default MainHeader;













import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/Product">Product</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/Welcome">Welcome</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
