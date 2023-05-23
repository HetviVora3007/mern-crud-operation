import React from 'react'
import { Link } from 'react-router-dom'

import './Add.css'

const Add = () => {
    return (
        <>
            <div className='header-container'>
                <div className='header-subcontainer'>
                    <div>
                        <Link className='header-link' to="/">CRUD Application</Link>
                    </div>
                </div>
            </div>
            <div className='addpage-maincontainer'>
                <div className='addpage-subcontainer-header'>
                    <p>Create Customer</p>
                </div>
                <div className='addpage-container'>
                    <div className='addpage-formcontainer'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter customer name' />
                        <label>Phone No.</label>
                        <input type='number' placeholder='Enter customer number' />
                        <label>Email Id</label>
                        <input type='email' placeholder='Enter customer emailid' />
                        <div className='create-cancel-buttons'>
                            <Link to='/' className='create-button'>Create</Link>
                            <Link to='/' className='cancel-button'>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>Made by Hetvi Vora</div>
        </>
    )
}

export default Add