import React, { Fragment } from 'react'
import App from '../App'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
            {/* <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 col-md-2 col-sm-9 col-12 bg-danger'>
                        <h1>section 1</h1>
                    </div>
                    <div className='col-lg-6 col-md-8 col-sm-2 col-12 bg-warning'>
                        <h1>section 2</h1>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-1 col-12  bg-info'>
                        <h1>section 3</h1>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
}

export default LandingPage