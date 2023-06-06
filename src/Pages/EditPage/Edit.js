import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Edit.css'

const Edit = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [formData, setFormData] = useState({})

    const params = useParams()


    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        const id = params.id
        const obj = props.customerData.filter(d => d._id == id)
        setFormData(obj[0])
    }, [])

    const updateHandlar = (formData) => {
        props.updateHandlar(formData)
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
            <div className='editpage-maincontainer'>
                <div className='editpage-subcontainer-header'>
                    <p>Edit Customer</p>
                </div>
                <div className='editpage-container'>
                    <div className='editpage-formcontainer'>
                        <label>Name</label>
                        <input type='text' value={formData.name} name='name' onChange={inputHandler} />

                        <label>Phone No.</label>
                        <input type='number' value={formData.phoneNo} name='phoneNo' onChange={inputHandler} />

                        <label>Email Id</label>
                        <input type='email' value={formData.email} name='email' onChange={inputHandler} />

                        <div className='edit-cancel-buttons'>
                            <Link to='/' className='edit-button'>
                                <button onClick={() => updateHandlar(formData)}>Edit</button>
                            </Link>
                            <Link to='/' className='cancel-button'><button>Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>Made by Hetvi Vora</div>
        </>
    )
}

export default Edit