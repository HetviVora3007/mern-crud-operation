import React from 'react'
import { Link } from 'react-router-dom'

import './Edit.css'

const Edit = () => {
    return (
        <>
            <div className='header-container'>
                <div className='header-subcontainer'>
                    <div>
                        <Link className='header-link' to="/">CRUD Application</Link>
                    </div>
                </div>
            </div>
            <div className='footer'>Made by Hetvi Vora</div>
        </>
    )
}

export default Edit