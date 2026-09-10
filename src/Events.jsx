import { Link } from "react-router-dom";
import events from "./events.js";

import {
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";

function Events() {
    return (
        <div className="container py-5">
        <div className="text-center mb-5">
            <h1 className="fw-bold">Upcoming Events</h1>
            <p className="text-muted">
            Check out the upcoming activities and choose an event to join.
            </p>
        </div>

        <div className="row g-4">
            {events.map((event) => (
            <div className="col-md-6 col-lg-4" key={event.id}>
                <div className="card event-card-simple h-100 shadow-sm">
                <div className="card-body p-4">
                    <div className="event-icon-box mb-3">
                    <FaCalendarAlt />
                    </div>

                    <h4 className="card-title fw-bold">{event.title}</h4>

                    <div className="event-info-simple">
                    <FaCalendarAlt />
                    <span>{event.date}</span>
                    </div>

                    <div className="event-info-simple">
                    <FaClock />
                    <span>{event.time}</span>
                    </div>

                    <div className="event-info-simple">
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                    </div>

                    <p className="text-muted mt-3">
                    {event.description}
                    </p>

                    <Link
                    to={`/events/${event.id}`}
                    className="btn btn-primary w-100 mt-3"
                    >
                    View Details
                    <FaArrowRight className="ms-2" />
                    </Link>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Events;

