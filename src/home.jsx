import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaCalendarCheck,
    FaUsers,
    FaSearch,
    FaMapMarkerAlt,
    FaClock,
    FaStar,
} from "react-icons/fa";

function Home() {
    return (
        <>
        <section className="home-hero">
            <div className="home-overlay"></div>

            <div className="container home-hero-content">
            <div className="row align-items-center">
                <div className="col-lg-7">
                <div className="home-text-content">
                    <span className="home-badge">
                    <FaStar className="me-2" />
                    Discover. Join. Experience.
                    </span>

                    <h1 className="home-title">
                    Find events that make your
                    <span> campus life better.</span>
                    </h1>

                    <p className="home-description">
                    EventHub helps students discover upcoming activities,
                    view event details, and register easily in one place.
                    </p>

                    <div className="home-buttons">
                    <Link to="/events" className="btn home-main-btn">
                        Explore Events
                        <FaArrowRight className="ms-2" />
                    </Link>

                    <Link to="/register" className="btn home-second-btn">
                        Register Now
                    </Link>
                    </div>

                    <div className="home-stats">
                    <div className="home-stat-item">
                        <strong>3+</strong>
                        <span>Upcoming Events</span>
                    </div>

                    <div className="home-stat-item">
                        <strong>Easy</strong>
                        <span>Registration</span>
                    </div>

                    <div className="home-stat-item">
                        <strong>Fast</strong>
                        <span>Event Access</span>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-lg-5 mt-5 mt-lg-0">
                <div className="home-floating-card">
                    <div className="floating-card-icon">
                    <FaCalendarCheck />
                    </div>

                    <span className="floating-label">FEATURED EVENT</span>

                    <h3>Web Development Workshop</h3>

                    <p>
                    Learn modern web development and improve your coding
                    skills with hands-on activities.
                    </p>

                    <div className="floating-info">
                    <div>
                        <FaCalendarCheck />
                        <span>September 10, 2026</span>
                    </div>

                    <div>
                        <FaClock />
                        <span>1:00 PM</span>
                    </div>

                    <div>
                        <FaMapMarkerAlt />
                        <span>Computer Laboratory</span>
                    </div>
                    </div>

                    <Link to="/events/1" className="floating-link">
                    View Event
                    <FaArrowRight />
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="home-features-section">
            <div className="container">
            <div className="text-center home-section-header">
                <span className="home-section-label">WHY EVENTHUB?</span>

                <h2>Everything you need in one place</h2>

                <p>
                Browse events, check important information, and register
                without making things complicated.
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                <div className="home-feature-card">
                    <div className="home-feature-icon">
                    <FaSearch />
                    </div>

                    <h4>Discover Events</h4>

                    <p>
                    Browse upcoming activities and find events that match
                    your interests.
                    </p>
                </div>
                </div>

                <div className="col-md-4">
                <div className="home-feature-card">
                    <div className="home-feature-icon">
                    <FaCalendarCheck />
                    </div>

                    <h4>View Details</h4>

                    <p>
                    See the date, time, venue, and other important information
                    before joining.
                    </p>
                </div>
                </div>

                <div className="col-md-4">
                <div className="home-feature-card">
                    <div className="home-feature-icon">
                    <FaUsers />
                    </div>

                    <h4>Join Easily</h4>

                    <p>
                    Register for your chosen event using a simple and
                    easy-to-use form.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default Home;