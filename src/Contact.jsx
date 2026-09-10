import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
    e.preventDefault();

        if (name === "" || email === "") {
            setError("Please fill in your name and email.");
            return;
        }

        navigate("/thank-you");
    }

return (
    <div>
        <h1>Contact</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Message: </label>
                <br />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            {error && <p>{error}</p>}

            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;