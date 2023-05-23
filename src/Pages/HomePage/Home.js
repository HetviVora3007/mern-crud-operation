import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
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
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                    <div className='card-container'>
                        <img src={profile} />
                        <p>hetvi vora</p>
                        <p>1234567890</p>
                        <p>hetvivora@gmail.com</p>
                        <div className='edit-delete-buttons'>
                            <Link to='/edit' className='edit-button'>Edit</Link>
                            <Link to='/' className='delete-button'>Delete</Link>
                        </div>
                    </div>
                </div>
                <div className='footer'>Made by Hetvi Vora</div>
            </div>
        </>
    )
}

export default Home