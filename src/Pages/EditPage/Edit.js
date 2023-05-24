import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Edit.css'
import Data from '../../Data'

const Edit = () => {

    const [data, setData] = useState({})
    const params = useParams()

    useEffect(() => {
        const id = params.id
        const obj = Data.filter(d => Number(d.id) == Number(id))
        setData(obj[0])
    }, [])

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
                        <input type='text' value={data.name} placeholder='Enter customer name' />
                        <label>Phone No.</label>
                        <input type='number' value={data.number} placeholder='Enter customer number' />
                        <label>Email Id</label>
                        <input type='email' value={data.email} placeholder='Enter customer emailid' />
                        <div className='edit-cancel-buttons'>
                            <Link to='/' className='edit-button'>
                                <button>Edit</button>
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