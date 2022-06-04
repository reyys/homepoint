import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import review from '../assets/review.png'
import review2 from '../assets/review2.png'

import gambar1 from '../assets/products/gambar1.png'
import gambar2 from '../assets/products/gambar2.png'
import gambar3 from '../assets/products/gambar3.png'
import gambar4 from '../assets/products/gambar4.png'
import gambar5 from '../assets/products/gambar5.png'
import gambar6 from '../assets/products/gambar6.png'

function Ulasan() {
    return (
        <div className='py-12 w-full'>
            <h1>Ulasan</h1>
            <div className='flex'>
                <div className='py-12 flex flex-col justify-center w-[150px] items-center'>
                    <h1 className='text-3xl font-bold'>4.8 <span className='text-xl'>/ 5</span></h1>
                    <div className='mt-2 flex items-center text-[#FBC646]'>
                        <AiFillStar className='text-xl' />
                        <AiFillStar className='text-xl' />
                        <AiFillStar className='text-xl' />
                        <AiFillStar className='text-xl' />
                        <BsStarHalf className='text-xl h-[18px]' />
                    </div>
                    <h1 className='text-xl'>{`(36 ulasan)`}</h1>
                </div>
                <div className='ml-24 flex flex-col items-center justify-center'>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>5</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1>24</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>4</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1>24</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>3</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1>24</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>2</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1>24</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>1</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1>24</h1>
                    </div>
                </div>
            </div>

            <div className='py-8 flex items-center'>
                <h1>Semua Ulasan {`(36)`}</h1>
                <div className='flex ml-12 gap-[20px]'>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>5</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>4</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>3</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>2</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>1</h1>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[20px]'>

                <div className="p-5 max-w-[750px] border-[1px] border-black rounded-md">
                    <h1>K***21</h1>
                    <div className='flex text-[#FBC646]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h1>Produk Original dan sesuai seperti pada gambar. Kualitas produk baik dan warnanya cantik</h1>
                    <div className='flex'>
                        <img src={review} alt="" />
                        <img src={review2} alt="" />
                    </div>
                    <h2>2022-02-22 06:25</h2>
                </div>
                <div className="p-5 max-w-[750px] border-[1px] border-black rounded-md">
                    <h1>K***21</h1>
                    <div className='flex text-[#FBC646]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h1>Produk Original dan sesuai seperti pada gambar. Kualitas produk baik dan warnanya cantik</h1>
                    <div className='flex'>
                        <img src={review} alt="" />
                        <img src={review2} alt="" />
                    </div>
                    <h2>2022-02-22 06:25</h2>
                </div>
                <div className="p-5 max-w-[750px] border-[1px] border-black rounded-md">
                    <h1>K***21</h1>
                    <div className='flex text-[#FBC646]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h1>Produk Original dan sesuai seperti pada gambar. Kualitas produk baik dan warnanya cantik</h1>
                    <div className='flex'>
                        <img src={review} alt="" />
                        <img src={review2} alt="" />
                    </div>
                    <h2>2022-02-22 06:25</h2>
                </div>
                <div className="p-5 max-w-[750px] border-[1px] border-black rounded-md">
                    <h1>K***21</h1>
                    <div className='flex text-[#FBC646]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h1>Produk Original dan sesuai seperti pada gambar. Kualitas produk baik dan warnanya cantik</h1>
                    <div className='flex'>
                        <img src={review} alt="" />
                        <img src={review2} alt="" />
                    </div>
                    <h2>2022-02-22 06:25</h2>
                </div>
            </div>

            <div className='py-24'>
                <h1 className='font-bold'>Diskusi</h1>
                <div className='mt-4 flex items-center justify-between py-4 px-5 border-[1px] border-black rounded-md'>
                    <h1>Diskusikan pertanyaanmu terkait produk ini dengan kami maupun pembeli lainnya</h1>
                    <button className='font-bold bg-[#FBC646] p-3 rounded-md'>Tulis Pertanyaan</button>
                </div>
                <div className='mt-12 rounded-md p-5 border-[1px] border-black'>
                    <h1 className='font-bold'>Lynn Tanner • <span className='font-light'>2022-02-22</span></h1>
                    <h1 className='py-2'>Apakah terdapat garansi? Jika ya berapa lama garansinya?</h1>
                    <div className='flex items-center py-2 border-t-[1px] border-black'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-[10px] h-[10px] bg-gray-300 rounded-full'></div>
                            <div className='w-[2px] h-[65px] bg-gray-400 rounded-md'></div>
                        </div>
                        <div>
                            <div className='ml-6'>
                                <div className='flex items-center py-3 gap-[20px]'>
                                    <h1 className='bg-blue-800 text-white px-2 py-1 rounded-xl'>Customer Care</h1>
                                    •
                                    <h1>2022-02-22</h1>
                                </div>
                                <h1>Halo, Garansi produk ini satu tahun, jika anda menemui masalah produk silahkan hubungi kami atau datang ke toko offline terdekat.</h1>
                                <input className="mt-4 p-1 indent-[10px] bg-gray-300 w-[100%] rounded-md" placeholder="Tambahkan komentar" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex pt-12 pb-6 justify-between'>
                        <h1 className='text-2xl font-bold'>Produk Lainnya</h1>
                        <a href="/">Lihat Selengkapnya</a>
                    </div>

                    <div className='flex items-center gap-[30px]'>
                        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
                            <img src={gambar1} alt="" />
                            <h1>Gelas kaca bening biru</h1>
                            <h1 className='py-4 font-bold'>Rp 23.000</h1>
                            <div className='flex items-center'>
                                <AiFillStar className='text-sm text-[#FBC646]' />
                                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                                <h3 className='ml-2'>Terjual 100</h3>
                            </div>
                        </div>
                        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
                            <img src={gambar2} alt="" />
                            <h1>Gelas kaca bening biru</h1>
                            <h1 className='py-4 font-bold'>Rp 23.000</h1>
                            <div className='flex items-center'>
                                <AiFillStar className='text-sm text-[#FBC646]' />
                                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                                <h3 className='ml-2'>Terjual 100</h3>
                            </div>
                        </div>
                        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
                            <img src={gambar3} alt="" />
                            <h1>Gelas kaca bening biru</h1>
                            <h1 className='py-4 font-bold'>Rp 23.000</h1>
                            <div className='flex items-center'>
                                <AiFillStar className='text-sm text-[#FBC646]' />
                                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                                <h3 className='ml-2'>Terjual 100</h3>
                            </div>
                        </div>
                        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
                            <img src={gambar4} alt="" />
                            <h1>Gelas kaca bening biru</h1>
                            <h1 className='py-4 font-bold'>Rp 23.000</h1>
                            <div className='flex items-center'>
                                <AiFillStar className='text-sm text-[#FBC646]' />
                                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                                <h3 className='ml-2'>Terjual 100</h3>
                            </div>
                        </div>
                        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
                            <img src={gambar5} alt="" />
                            <h1>Gelas kaca bening biru</h1>
                            <h1 className='py-4 font-bold'>Rp 23.000</h1>
                            <div className='flex items-center'>
                                <AiFillStar className='text-sm text-[#FBC646]' />
                                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                                <h3 className='ml-2'>Terjual 100</h3>
                            </div>
                        </div>
                        <div className='p-2 border-black border-[1px] max-w-[180px] flex-col items-center justify-center'>
                            <img src={gambar6} alt="" />
                            <h1>Gelas kaca bening biru</h1>
                            <h1 className='py-4 font-bold'>Rp 23.000</h1>
                            <div className='flex items-center'>
                                <AiFillStar className='text-sm text-[#FBC646]' />
                                <h3 className='border-r-[1px] pl-1 pr-2 border-black'>4.8</h3>
                                <h3 className='ml-2'>Terjual 100</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Ulasan