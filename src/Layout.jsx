import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import PageTransitionWrapper from './PageTransitionWrapper.jsx';
import { motion, AnimatePresence } from 'framer-motion'

export default function Layout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
