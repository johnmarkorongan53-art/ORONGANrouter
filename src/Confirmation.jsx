import { Link, useLocation } from "react-router-dom";

import {
    FaCheck,
    FaCalendarAlt,
    FaArrowRight,
} from "react-icons/fa";

function Confirmation() {
    const location = useLocation();

    const name = location.state?.name;
    const event = location.state?.event;

    return (
        <div className="confirmation-page">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="confirmation-card">
                <div className="success-circle">
                    <FaCheck />
                </div>

                <span className="success-label">
                    REGISTRATION COMPLETE
                </span>

                <h1>You're all set!</h1>

                {name && event ? (
                    <>
                    <p>
                        Thank you, <strong>{name}</strong>. Your
                        registration has been successfully submitted.
                    </p>

                    <div className="confirmation-event">
                        <FaCalendarAlt />

                        <div>
                        <small>You are registered for</small>
                        <strong>{event}</strong>
                        </div>
                    </div>
                    </>
                ) : (
                    <p>
                    Your registration has been submitted
                    successfully.
                    </p>
                )}

                <Link to="/events" className="btn professional-btn mt-4">
                    Browse More Events
                    <FaArrowRight className="ms-2" />
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Confirmation;