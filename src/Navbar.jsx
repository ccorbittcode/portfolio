import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
            <nav className="navbar">
                <ul className="navlist">
                    <li>
                        <NavLink to="/portfolio" className={(navData) => (navData.isActive ? 'active' : 'navlink')} ><img src="/public/kirbyclout.png" className="navicon"/></NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/contact" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/projects" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/experience" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/about" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >About</NavLink>
                    </li>
                </ul>
            </nav>
    )
}
