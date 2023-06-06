import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import './Home.css'
import profile from '../../Assests/profile.avif'

const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const deleteHandlar = (_id) => {
        props.deleteHandlar(_id)
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
            <div className='homepage-maincontainer'>
                <div className='homepage-subcontainer-header'>
                    <p>Customer List</p>
                    <Link to='/add' className='create-customer-link'>Create Customer</Link>
                </div>
                <div className='homepage-container'>
                    {props.customerData.length == 0 ? <p className='homepage-text'>No Customer to show. Click on create customer to create one.</p> :
                        props.customerData.map((item) => {
                            return (
                                <div className='card-container'>
                                    <img src={profile} />
                                    <p>{item.name}</p>
                                    <p>{item.phoneNo}</p>
                                    <p>{item.email}</p>
                                    <div className='edit-delete-buttons'>
                                        <Link to={`/edit/${item._id}`} className='homepage-edit-button'>
                                            <button >Edit</button></Link>
                                        <Link to='/' className='delete-button'><button onClick={() => deleteHandlar(item._id)}>Delete</button></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='footer'>Made by Hetvi Vora</div>
            </div>
        </>
    )
}

export default Home