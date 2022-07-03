import React from 'react'

// Import Component 
import Hero from './components/hero'
import Profile from './components/profile'
import Product from './components/product'

import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPass from './pages/ForgetPass';


//React Router
import { Routes, Route } from 'react-router-dom'
import { addressContext } from './context/context'
import Header from './components/header'
import Footer from './pages/Footer';
import Homepage from './pages/Homepage';
import Wishlist from './components/wishlist/wishlist';

function App() {

    //React Context Data ( Fetch Data using Axios )
    const { dataProduct } = React.useContext(addressContext)

    const [reload, setReload] = React.useState(false)

    // Put dataProduct to React State
    const [data, setData] = React.useState(dataProduct)
    React.useEffect(() => {
        setData(dataProduct)
    }, [dataProduct])


    //Menu Handler for Mobile & Tablet
    const [menu, setMenu] = React.useState(false)

    // Search Function (Navigation)
    const searchHandler = (e) => {
        setReload(true)
        const lowerInput = e.target.value.toLowerCase()
        setData(dataProduct.filter(x => x.name.toLowerCase().includes(lowerInput)))
        setTimeout(() => {
            setReload(false)
        }, 300)
    }

    //Pagination 
    // const [currentPage, setCurrentPage] = React.useState(1)
    // const [productPerPage, setProductPerPage] = React.useState(16)

    // *** Pagination Pattern 
    // const indexOfLastPost = currentPage * productPerPage
    // const indexOfFirstPost = indexOfLastPost - productPerPage
    // const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

    //Pagination Function
    // const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <Header menu={menu} setMenu={setMenu} open={open} setOpen={setOpen} searchHandler={searchHandler} />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/search' element={<Hero data={data} setData={setData} reload={reload} open={open} />} />
                <Route path='/wishlist' element={<Wishlist />} />
                {/* productPerPage={productPerPage} paginate={paginate} currentPage={currentPage} */}
                <Route path='/product/:id' element={<Product />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/forgetpass' element={<ForgetPass />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
            <Footer />
        </div >
    )
}

export default App