import { useParams, Link } from "react-router-dom";
import events from "./events.js";

import {
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaArrowLeft,
    FaUserPlus,
} from "react-icons/fa";

function EventDetail() {
    const { id } = useParams();

    const event = events.find(
        (event) => event.id === Number(id)
    );

    if (!event) {
        return (
        <div className="container py-5 text-center">
            <div className="not-found-box">
            <h2>Event Not Found</h2>

            <p>
                Sorry, the event you are looking for does not exist.
            </p>

            <Link to="/events" className="btn btn-primary">
                <FaArrowLeft className="me-2" />
                Back to Events
            </Link>
            </div>
        </div>
        );
    }

    return (
        <div className="page-section">
        <div className="container">
            <div className="event-detail-card">
            <div className="event-detail-header">
                <span className="event-category">
                {event.category}
                </span>

                <h1>{event.title}</h1>

                <p>
                Everything you need to know about this upcoming event.
                </p>
            </div>

            <div className="event-detail-content">
                <div className="row g-4">
                <div className="col-md-4">
                    <div className="detail-info-box">
                    <FaCalendarAlt />

                    <div>
                        <small>Date</small>
                        <strong>{event.date}</strong>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="detail-info-box">
                    <FaClock />

                    <div>
                        <small>Time</small>
                        <strong>{event.time}</strong>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="detail-info-box">
                    <FaMapMarkerAlt />

                    <div>
                        <small>Location</small>
                        <strong>{event.location}</strong>
                    </div>
                    </div>
                </div>
                </div>

                <div className="event-about mt-5">
                <h4>About This Event</h4>

                <p>{event.description}</p>
                </div>

                <div className="d-flex flex-wrap gap-3 mt-4">
                <Link
                    to="/register"
                    state={{ event: event.title }}
                    className="btn professional-btn"
                >
                    <FaUserPlus className="me-2" />
                    Register for Event
                </Link>

                <Link
                    to="/events"
                    className="btn professional-outline-btn"
                >
                    <FaArrowLeft className="me-2" />
                    Back to Events
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default EventDetail;