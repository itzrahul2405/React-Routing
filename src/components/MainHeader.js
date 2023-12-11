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

import { NavLink } from "react-router-dom";

// export default MainHeader;






const MainHeader = () => {
    return(
        <ul>
            <li>
                <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
                <NavLink to="/Welcome">Welcome</NavLink>
            </li>
        </ul>
    );
}

export default MainHeader;