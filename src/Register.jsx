import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import events from "./events.js";

import {
    FaUser,
    FaEnvelope,
    FaCalendarAlt,
    FaPaperPlane,
    FaCheckCircle,
} from "react-icons/fa";

function Register() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedEvent = location.state?.event || "";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        event: selectedEvent,
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
        ...formData,
        [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        if (formData.name.trim() === "") {
        newErrors.name = "Please enter your full name.";
        }

        if (formData.email.trim() === "") {
        newErrors.email = "Please enter your email address.";
        } else if (!formData.email.includes("@")) {
        newErrors.email = "Please enter a valid email address.";
        }

        if (formData.event === "") {
        newErrors.event = "Please select an event.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        navigate("/confirmation", {
            state: {
            name: formData.name,
            event: formData.event,
            },
        });
        }
    }

    return (
        <div className="register-page">
        <div className="container">
            <div className="register-page-header text-center">
            <span className="register-page-label">EVENT REGISTRATION</span>

            <h1>Reserve Your Spot</h1>

            <p>
                Fill in your information below and choose the event you want to join.
            </p>
            </div>

            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="register-card">
                <div className="register-top-section">
                    <div className="register-main-icon">
                    <FaCalendarAlt />
                    </div>

                    <div>
                    <h2>Register for an Event</h2>
                    <p>
                        Complete the form below to confirm your registration.
                    </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Full Name
                    </label>

                    <div className="input-group register-input">
                        <span className="input-group-text">
                        <FaUser />
                        </span>

                        <input
                        type="text"
                        className={`form-control ${
                            errors.name ? "is-invalid" : ""
                        }`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        />
                    </div>

                    {errors.name && (
                        <div className="register-error">
                        {errors.name}
                        </div>
                    )}
                    </div>

                    <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Email Address
                    </label>

                    <div className="input-group register-input">
                        <span className="input-group-text">
                        <FaEnvelope />
                        </span>

                        <input
                        type="text"
                        className={`form-control ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        />
                    </div>

                    {errors.email && (
                        <div className="register-error">
                        {errors.email}
                        </div>
                    )}
                    </div>

                    <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Select Event
                    </label>

                    <div className="input-group register-input">
                        <span className="input-group-text">
                        <FaCalendarAlt />
                        </span>

                        <select
                        className={`form-select ${
                            errors.event ? "is-invalid" : ""
                        }`}
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        >
                        <option value="">Choose an event</option>

                        {events.map((event) => (
                            <option key={event.id} value={event.title}>
                            {event.title}
                            </option>
                        ))}
                        </select>
                    </div>

                    {errors.event && (
                        <div className="register-error">
                        {errors.event}
                        </div>
                    )}
                    </div>

                    <div className="register-note">
                    <FaCheckCircle />

                    <span>
                        Make sure your information is correct before submitting.
                    </span>
                    </div>

                    <button
                    type="submit"
                    className="btn register-submit-btn w-100"
                    >
                    Complete Registration
                    <FaPaperPlane className="ms-2" />
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Register;