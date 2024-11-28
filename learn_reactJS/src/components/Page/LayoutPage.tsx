import Header from '../Header'
import Footer from '../Footer'
// import { Outlet } from 'react-router-dom'
import Home from '../Home'

const LayoutPage = () => {
    return (
        <div className='min-h-screen overflow-hidden'>
            <Header />
                <Home />
            <Footer />
        </div>
    )
}

export default LayoutPage