import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Evnets
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events/:id"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Evnets detail
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events/new"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New evnets
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events/:id/edit"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Edit evnets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
