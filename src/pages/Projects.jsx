import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ children, slideInFromRight }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            x: slideInFromRight ? 100 : -100,
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
        },
        visible: {
            opacity: 1,
            x: 0,
            boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.2)",
            transition: { duration: 0.5, delay: 0.3 }
        },
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={variants}
            className="project-card"
        >
            {children}
        </motion.div>
    );
};

const Projects = () => {

    return (
        <div className="outlet">
            <h1>Projects</h1>
            <ProjectCard slideInFromRight={false}>
                <div className="card-content">
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
                <div>
                    <img src="/portfolio/self-photo.png" alt="Chase" className="self-photo" />
                </div>
            </ProjectCard>
            <ProjectCard slideInFromRight={true}>
                <div className="card-content">
                    <h2>Kinder Real Estate</h2>
                    <p>A mock real estate site, built in the MERN stack.</p>
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Vite</li>
                        </ul>
                        <ul>
                            <li>MongoDB</li>
                            <li>React Router</li>
                            <li>Cloudinary</li>
                            <li>Passport</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="../public/self-photo.png" alt="Chase" className="self-photo" />
                </div>
            </ProjectCard>
            <ProjectCard slideInFromRight={false}>
                <div className="card-content">
                    <h2>YelpCamp</h2>
                    <p>An app for users to post and review campgrounds in the United States. Built with Colt Steele's Web Developer Bootcamp.</p>
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul>
                            <li>Passport</li>
                            <li>Bootstrap</li>
                            <li>Mapbox</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="../public/self-photo.png" alt="Chase" className="self-photo" />
                </div>
            </ProjectCard>
            <h2 style={{textAlign: "center"}}>And more to come....</h2>
        </div>
    )
}

export default Projects;
