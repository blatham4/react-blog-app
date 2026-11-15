import { useState } from "react";

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert("Your message has been submitted!");
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="page-container">
            <div className="contact-page">

                <h1>Contact Me</h1>
                <p>Have a question or want to get in touch? Send me a message!</p>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                    />

                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Write your message"
                        rows="5"
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>

            </div>
        </div>
    );
}
export default ContactPage;