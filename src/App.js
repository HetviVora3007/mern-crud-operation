import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/HomePage/Home'
import Add from './Pages/AddPage/Add'
import Edit from './Pages/EditPage/Edit'
import Loading from './Pages/LoadingPage/Loading'
import backendString from './Utils/backendString'

function App() {

  const [customerData, setCustomerData] = useState([])
  const [loading, setloading] = useState(false)

  const getCustomer = async () => {
    setloading(true)
    const response = await fetch(backendString)
    const data = await response.json()
    setCustomerData(data)
    setloading(false)
  }

  useEffect(() => {
    const getCustomerList = async () => {
      setloading(true)
      const response = await fetch(backendString)
      const data = await response.json()
      setCustomerData(data)
      setloading(false)
    }
    getCustomerList()
  }, [])

  const addData = async (formData) => {
    setloading(true)
    const response = await fetch(backendString, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    getCustomer()
  }

  const deleteData = async (_id) => {
    setloading(true)
    const response = await fetch(backendString + `/delete/${_id}/`, {
      method: 'DELETE',
    })
    getCustomer();
  }

  const updateData = async (formData) => {
    setloading(true)
    const response = await fetch(backendString + `/update/${formData._id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    getCustomer();
  }

  const createHandlar = (formData) => {
    addData(formData)
  }

  const deleteHandlar = (_id) => {
    deleteData(_id)
  }

  const updateHandlar = (formData) => {
    updateData(formData)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home customerData={customerData} deleteHandlar={deleteHandlar} />} />
          <Route path='/add' element={<Add createHandlar={createHandlar} />} />
          <Route path='/edit/:id' element={<Edit customerData={customerData} updateHandlar={updateHandlar} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
