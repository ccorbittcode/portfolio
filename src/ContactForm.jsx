import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            return {
                ...currData,
                [changedField]: newValue,
            };
        })

    }
    const handleSubmit = () => {
        console.log(formData);
    }
    return (
        <div className="contactform">
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
                name="firstName"
                className="smallformelement"
                id="firstname"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                name="lastName"
                className="smallformelement"
                id="lastname"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                className="smallformelement"
                id="email"
            />
            <input
                type="text"
                placeholder="Phone"
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                className="smallformelement"
                id="phone"
            />
            <input
                type="text"
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject}
                name="subject"
                className="midformelement"
                id="subject"
            />
            <textarea
                type="text"
                placeholder="Message"
                onChange={handleChange}
                value={formData.message}
                name="message"
                className="largeformelement"
                id="message"
            />
            <button
                onClick={handleSubmit}
                className="submitbutton"
            >
                Send it!
            </button>
        </div>
    )
}
