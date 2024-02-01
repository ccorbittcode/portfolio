import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import PageTransitionWrapper from './PageTransitionWrapper.jsx';

export default function Layout({ location, isInitialRender }) {

    return (
        <>
            <Navbar />
            <PageTransitionWrapper isInitialRender={isInitialRender} location={location}>
                <Outlet />
            </PageTransitionWrapper>
            <Footer />
        </>
    )
}
