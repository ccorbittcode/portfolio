const Projects = () => {
    return (
        <div className="outlet">
            <h1>Projects</h1>
            <div className="project-card">
                <h2>This Portfolio</h2>
                <p>The page you're looking at!</p>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>React</li>
                    <li>Framer Motion</li>
                    <li>Vite</li>
                    <li>React Router</li>
                </ul>
            </div>
            <div className="project-card">
                <h2>Kinder Real Estate</h2>
                <p>A mock real estate site, built in the MERN stack.</p>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Vite</li>
                    <li>MongoDB</li>
                    <li>React Router</li>
                    <li>Cloudinary</li>
                    <li>Passport</li>
                </ul>
            </div>
            <div className="project-card">
                <h2>YelpCamp</h2>
                <p>An app for users to post and review campgrounds in the United States. Built with Colt Steele's Web Developer Bootcamp.</p>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Passport</li>
                    <li>Bootstrap</li>
                    <li>Mapbox</li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;
