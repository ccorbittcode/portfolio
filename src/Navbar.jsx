import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
            <nav className="navbar">
                <ul className="navlist">
                    <li>
                        <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : 'navlink')} ><img src="/kirbyclout.png" className="navicon"/></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : 'navlink')} >About</NavLink>
                    </li>
                </ul>
            </nav>
    )
}
