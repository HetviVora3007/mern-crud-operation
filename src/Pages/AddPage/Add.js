import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Add.css'

const Add = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [formData, setFormData] = useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const createHandlar = (formData) => {
        props.createHandlar(formData)
    }

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
                        <input type='text' name='name' placeholder='Enter customer name' onChange={inputHandler} />
                        <label>Phone No.</label>
                        <input type='number' name='phoneNo' placeholder='Enter customer number' onChange={inputHandler} />
                        <label>Email Id</label>
                        <input type='email' name='email' placeholder='Enter customer emailid' onChange={inputHandler} />
                        <div className='create-cancel-buttons'>
                            <Link to='/' className='create-button'>
                                <button onClick={() => createHandlar(formData)}>Create</button>
                            </Link>
                            <Link to='/' className='cancel-button'><button>Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className='footer'>Made by Hetvi Vora</div>
        </>
    )
}

export default Add