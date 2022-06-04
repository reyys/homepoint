import React from 'react'
import Logo from '../assets/homepoint.png'
import Search from '../assets/icon/search.png'
import bell from '../assets/icon/bell.png'
import love from '../assets/icon/love.png'
import cart from '../assets/icon/cart.png'
import user from '../assets/icon/user.png'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='w-full bg-[#6999B8] md:px-12 h-[8vh] justify-between px-4 flex md:px-3 items-center'>
            <Link to="/">
                <img className="max-w-[100px] md:max-w-[140px]" src={Logo} alt="Homepoint" />
            </Link>
            <div className='hidden xl:flex ml-40 items-center relative'>
                <select className='h-[30px] text-sm px-3'>
                    <option value="Kategori">Kategori</option>
                </select>
                <input className="px-4 h-[30px] border-none w-[450px]" placeholder='Search ...' />
                <img className="absolute right-[20px]" src={Search} alt="search" />
            </div>
            <div className='hidden md:flex ml-24'>
                <img className="px-5 h-[23px]" src={love} alt="love" />
                <img className="px-5 h-[23px]" src={cart} alt="cart" />
                <img className="px-5 h-[23px]" src={bell} alt="bell" />
                <Link to="/profile" className="px-5 h-[23px] flex items-center gap-[20px]">
                    <img src={user} alt="user" />
                    <h3 className='text-white'>Masuk/Daftar</h3>
                </Link>
            </div>
            <Link to="/profile" className="h-[23px] flex md:hidden items-center">
                <img src={user} alt="user" />
            </Link>
        </div>
    )
}

export default Nav