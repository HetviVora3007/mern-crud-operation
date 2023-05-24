import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import Data from '../../Data'
import profile from '../../Assests/profile.avif'

const Home = () => {
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
                    {Data.map((item) => {
                        return (
                            <div className='card-container'>
                                <img src={profile} />
                                <p>{item.name}</p>
                                <p>{item.number}</p>
                                <p>{item.email}</p>
                                <div className='edit-delete-buttons'>
                                    <Link to={`/edit/${item.id}`} className='homepage-edit-button'>
                                        <button >Edit</button></Link>
                                    <Link to='/' className='delete-button'><button >Delete</button></Link>
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