import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/HomePage/Home'
import Add from './Pages/AddPage/Add'
import Edit from './Pages/EditPage/Edit'
import backendString from './Utils/backendString'

function App() {

  const [customerData, setCustomerData] = useState([])

  const getCustomer = async () => {
    const response = await fetch(backendString)
    const data = await response.json()
    setCustomerData(data)
  }

  useEffect(() => {
    const getCustomerList = async () => {
      const response = await fetch(backendString)
      const data = await response.json()
      setCustomerData(data)
    }
    getCustomerList()
  }, [])

  const addData = async (formData) => {
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
    const response = await fetch(backendString + `/delete/${_id}/`, {
      method: 'DELETE',
    })
    getCustomer();
  }

  const updateData = async (formData) => {
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
