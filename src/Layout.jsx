import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import PageTransitionWrapper from './PageTransitionWrapper.jsx';
import { AnimatePresence } from 'framer-motion'

export default function Layout({ location }) {

    return (
        <>
            <Navbar />
            <PageTransitionWrapper location={location}>
                <Outlet />
            </PageTransitionWrapper>
            <Footer />
        </>
    )
}
