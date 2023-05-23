import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/HomePage/Home'
import Add from './Pages/AddPage/Add'
import Edit from './Pages/EditPage/Edit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
