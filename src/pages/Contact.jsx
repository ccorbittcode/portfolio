import ContactForm from "../ContactForm"

const Contact = () => {
    return (
        <div className="outlet">
            <h1>Lets get in touch.</h1>
            <ContactForm />
            <div className="contactme">
                <h3>
                    Or, reach out to me here:
                </h3>
                <div className="contactlist">
                    <img className="contacticon" src="/twittericon.png" alt="" />
                    <img className="contacticon" src="/linkedinicon.png" alt="" />
                    <img className="contacticon" src="/emailicon.png" alt="" />
                </div>
                <div className="contactlist">
                    <a className="contactlinks" href="https://twitter.com/ChaseCorbi5584">Twitter</a>
                    <a className="contactlinks" href="https://www.linkedin.com/in/chase-corbitt-944839121/">LinkedIn</a>
                    <a className="contactlinks" href="mailto:chase.corbitt.141@gmail.com">Email me</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
