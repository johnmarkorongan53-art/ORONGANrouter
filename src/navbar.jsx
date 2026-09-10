import { Link, NavLink } from "react-router-dom";
import {
    FaCalendarAlt,
    FaHome,
    FaClipboardList,
    FaUserPlus,
} from "react-icons/fa";

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
        <div className="container">
            <Link
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            to="/"
            >
            <div className="brand-icon">
                <FaCalendarAlt />
            </div>

            EventHub
            </Link>

            <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto gap-lg-2">
                <NavLink
                className={({ isActive }) =>
                    `nav-link custom-nav-link ${isActive ? "active-link" : ""}`
                }
                to="/"
                >
                <FaHome className="me-2" />
                Home
                </NavLink>

                <NavLink
                className={({ isActive }) =>
                    `nav-link custom-nav-link ${isActive ? "active-link" : ""}`
                }
                to="/events"
                >
                <FaClipboardList className="me-2" />
                Events
                </NavLink>

                <NavLink
                className={({ isActive }) =>
                    `nav-link custom-nav-link ${isActive ? "active-link" : ""}`
                }
                to="/register"
                >
                <FaUserPlus className="me-2" />
                Register
                </NavLink>
            </div>
            </div>
        </div>
        </nav>
    );
}

export default navbar;