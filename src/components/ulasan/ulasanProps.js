import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function UlasanProps({ gambar }) {
    return (
        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
            <img src={gambar} alt="" />
            <h1>Gelas kaca bening biru</h1>
            <h1 className='py-4 font-bold'>Rp 23.000</h1>
            <div className='flex items-center'>
                <AiFillStar className='text-sm text-[#FBC646]' />
                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                <h3 className='ml-2'>Terjual 100</h3>
            </div>
        </div>
    )
}

export default UlasanProps