// import React from 'react';
// import {NavLink} from "react-router-dom";

// function Navigation(props) {   

//     return (
//     <div className=" row navigation" id="navigation">
//         <NavLink to="/about">ABOUT </NavLink>
//         <NavLink to="/portfolio">PORTFOLIO </NavLink>
//         <NavLink to="/contact">CONTACT </NavLink>
//         <NavLink to="/resume">RESUME</NavLink>
//     </div>
//   );
// }

// export default Navigation;

// import React from 'react';

// function Navigation() {

//     return(
//         <nav>
//             <ul className='nav'>
//                 <li>About Me</li>
//                 <li>Portfolio</li>
//                 <li>Contact</li>
//                 <li>Resume</li>
//             </ul>
//         </nav>
//     )
// }

// export default Navigation;

import React from "react";

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;