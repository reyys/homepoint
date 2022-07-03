import { Combobox } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { addressContext } from '../context/context'
import CustomBanner from '../assets/discountBanner.svg'
import axios from 'axios'
import ReactPaginate from 'react-paginate';



function Hero({ data, setData, reload, open }) {

    const { dataProduct } = React.useContext(addressContext)

    const [items, setItems] = useState([])

    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize] = useState(16)

    const [unsorted, setUnsorted] = useState(items)

    useEffect(() => {
        setUnsorted(items)
    }, [items])

    const handlePageClick = (data) => {
        setPageNumber(data.selected)
    }

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/products?Page%20number=${pageNumber}&Page%20size=${pageSize}`);
            const dataResult = await res.data.data
            setItems(dataResult)
        }
        getData()
    }, [pageNumber, pageSize])

    useEffect(() => {
        setData(items.products)
    }, [items])


    const [brandData, setBrandData] = React.useState([])
    const [colorData, setColorData] = React.useState([])
    const [rating] = React.useState([4, 3, 2, 1])



    React.useEffect(() => {
        if (data) {
            const dataBrand = data.map(x => x.brand)
            const filteredBrand = dataBrand.filter((c, index) => {
                return dataBrand.indexOf(c) === index;
            })
            setBrandData(filteredBrand)
        }
    }, [data])

    React.useEffect(() => {
        if (data) {
            const dataColor = data.map(x => x.color)
            const filteredColor = dataColor.filter((c, index) => {
                return dataColor.indexOf(c) === index;
            })
            setColorData(filteredColor)
        }
    }, [data])


    const [brand, setBrand] = React.useState([])
    const [color, setColor] = React.useState([])
    const [ratingData, setRatingData] = React.useState([])


    const [filterList, setFilterList] = React.useState({
        min: "",
        max: "",
    })

    const [check, setCheck] = React.useState()

    //Reset Semua Filter
    const resetButton = () => {
        setData(dataProduct)
        setFilterList({
            min: "",
            max: "",

        })
    }


    //Filter Untuk Harga Minimum - Maksimum
    const priceChanger = e => {
        setFilterList(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    // Filter untuk Fungsi Sortir
    const sortFilter = (e) => {
        if (e.target.value === "Terlaris") {
            const sorted = [...data].sort((a, b) => b.amountSold - a.amountSold)
            setData(sorted)
        }
        if (e.target.value === "Terbaru") {
            const sortedNew = [...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            setData(sortedNew)
        }
        if (e.target.value === "Termahal") {
            const sortedExpensive = [...data].sort((a, b) => b.price - a.price)
            setData(sortedExpensive)
        }
        if (e.target.value === "Termurah") {
            const sortedCheap = [...data].sort((a, b) => a.price - b.price)
            setData(sortedCheap)
        }
        if (e.target.value === "Diskon") {
            const sortedCheap = [...data].sort((a, b) => b.discount - a.discount)
            setData(sortedCheap)
        }
        if (e.target.value === "Sesuai") {
            setData(unsorted.products)
        }
    }

    //Rating Filter
    const ratingChecker = (e) => {
        const exist = ratingData.find(x => x === e.target.name)
        if (exist) {
            setRatingData(prevState => {
                return prevState.filter(x => x !== e.target.name)
            })
        }
        else {
            setRatingData(prevState => {
                return [...prevState, e.target.name]
            })
        }

    }


    // Brand Filter
    const brandChecker = (e) => {
        const exist = brand.find(x => x === e.target.name)
        if (exist) {
            setBrand(prevState => {
                return prevState.filter(x => x !== e.target.name)
            })
        }
        else {
            setBrand(prevState => {
                return [...prevState, e.target.name]
            })
        }

    }

    // Filter Color
    const colorHandler = (e) => {
        const exist = color.find(x => x === e.target.name)
        if (exist) {
            setColor(prevState => {
                return prevState.filter(x => x !== e.target.name)
            })
        }
        else {
            setColor(prevState => {
                return [...prevState, e.target.name]
            })
        }
    }

    const brandHandler = (e) => {

        const dataBrand = dataProduct.map(x => x.brand)
        const filteredBrand = dataBrand.filter(x => x.toLowerCase().includes(e.target.value.toLowerCase()))
        setBrandData(filteredBrand)
    }


    // Filter Keseluruhan 
    const advancedFiltering = () => {
        let updatedData = dataProduct

        // Filter Harga 
        if (filterList.min) {
            updatedData = updatedData.filter(x => x.price >= Number(filterList.min))
        }
        if (filterList.max) {
            updatedData = updatedData.filter(x => x.price <= Number(filterList.max))
        }

        // Filter Rating 
        if (ratingData) {
            {
                ratingData.map(x => {
                    updatedData = updatedData.filter(y => y.ratingAverage >= Number(x))
                })
            }
        }
        // Filter Custom Brand 
        if (brand) {
            {
                brand.map(x => {
                    updatedData = updatedData.filter(y => y.brand === x)
                })
            }
        }

        //Color Filter
        if (color) {
            color.map(x => {
                updatedData = updatedData.filter(y => y.color === x)
            })
        }

        setData(updatedData)
    }

    const handleSubCategories = (e) => {
        console.log(e.target.id)
        setData(items.products.filter(x => x.productSubcategories.name === e.target.id))
    }

    return (
        <>
            <div className={`${open ? "show-dropdown" : "hide-dropdown"} flex gap-12`}>
                <div className="p-12 flex justify-between w-full">
                    <div className='font-bold'>Semua Kategori</div>
                    <div>
                        <div className='font-bold px-2'>Peralatan Dapur</div>
                        <ul className="flex flex-col gap-3 mt-3">
                            <li onClick={e => handleSubCategories(e)} id="Peralatan Masak" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Peralatan Masak</li>
                            <li onClick={e => handleSubCategories(e)} id="Aksesoris Dapur" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Aksesoris Dapur</li>
                            <li onClick={e => handleSubCategories(e)} id="Perlengkapan Masak" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Perlengkapan Masak</li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-bold px-2'>Furnitur</div>
                        <ul className="flex flex-col gap-3 mt-3">
                            <li onClick={e => handleSubCategories(e)} id="Furnitur Furnitur Interior" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Furnitur Furnitur Interior</li>
                            <li onClick={e => handleSubCategories(e)} id="Furnitur Furnitur Eksterior" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Furnitur Furnitur Eksterior</li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-bold px-2'>Peralatan Kebersihan</div>
                        <ul className="flex flex-col gap-3 mt-3">
                            <li onClick={e => handleSubCategories(e)} id="Kebersihan Rumah" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Kebersihan Rumah</li>
                            <li onClick={e => handleSubCategories(e)} id="Kebersihan Dapur" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Kebersihan Dapur</li>
                            <li onClick={e => handleSubCategories(e)} id="Kebersihan Toilet" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Kebersihan Toilet</li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-bold px-2'>Elektronik</div>
                        <ul className="flex flex-col gap-3 mt-3">
                            <li onClick={e => handleSubCategories(e)} id="Elektronik Dapur" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Elektronik Dapur</li>
                            <li onClick={e => handleSubCategories(e)} id="Elektronik Kebersihan" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Elektronik Kebersihan</li>
                            <li onClick={e => handleSubCategories(e)} id="Perangkat Elektronik" className="px-2 cursor-pointer hover:text-red-500 py-3 rounded-md hover:bg-orange-300">Perangkat Elektronik</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-16 flex flex-col items-center lg:flex-row lg:items-start py-5'>
                <div className='border-[1px] w-full lg:w-max border-blue-pale rounded-md'>
                    <div className='p-5'>
                        <div className='flex justify-between'>
                            <h2 className='font-bold'>Filter</h2>
                            <button onClick={resetButton} className='cursor-pointer text-[#FBC646]'>Reset</button>
                        </div>
                        <h2 className='mt-5'>Harga</h2>
                        <div className='flex items-center mt-3 gap-[5px]'>
                            <input value={filterList.min} id="price" name="min" onChange={e => priceChanger(e)} className="bg-light-blue-pale border-[1px] border-blue-pale rounded-md p-2" placeholder='Rp   Minimum' />
                            <div>-</div>
                            <input value={filterList.max} id="price" name="max" onChange={e => priceChanger(e)} className="bg-light-blue-pale border-[1px] border-blue-pale rounded-md p-2" placeholder='Rp   Maksimum' />
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5 flex flex-col gap-[10px]'>
                        <h2 className='mb-5'>Rating</h2>
                        {rating.map(x => {
                            return (
                                <div className='flex items-center gap-[10px]'>
                                    <input onClick={e => ratingChecker(e)} name={x} className='border-[1px] border-light-blue-pale rounded-md' type="checkbox" />
                                    <AiFillStar className='text-[#FBC646]' />
                                    <h3>{x} Keatas</h3>
                                </div>
                            )
                        })}
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5'>
                        <h2>Brand</h2>
                        <div className='w-[100%] rounded-md my-3 flex items-center justify-between p-2 border-[1px] border-blue-pale'>
                            <input onChange={(e) => brandHandler(e)} placeholder='Input text' className='w-full outline-none border-none' />
                            <AiOutlineSearch />
                        </div>
                        <div className='py-5 max-h-[230px] overflow-y-auto flex flex-col gap-[10px] mt-5'>
                            {brandData ?
                                brandData.map(x => {
                                    return (
                                        <div className='flex gap-[20px] items-center'>
                                            <input name={x} onClick={e => brandChecker(e)} type="checkbox" className="border-[1px] border-light-blue-pale rounded-md" />
                                            <h2>{x}</h2>
                                        </div>
                                    )
                                })
                                :
                                ""
                            }
                        </div>
                    </div>
                    <hr className='border-blue-pale'></hr>
                    <div className='p-5 flex flex-col'>
                        <h2 className='mt-3'>Warna</h2>
                        <div className='flex flex-wrap mt-5 gap-3 max-w-[100%]'>
                            {colorData ?
                                colorData.map(x => {
                                    return (
                                        <input id={x === "lainnya" ? "grad" : ""} style={{ backgroundColor: `${x !== "lainnya" ? x : ""}` }} type="checkbox" onClick={e => colorHandler(e)} name={x} className={`input-checkbox`}></input>
                                    )
                                })
                                :
                                ""
                            }
                        </div>
                        <button onClick={advancedFiltering} className='mt-[30px] p-2 font-semibold w-[85%] rounded-md mx-auto bg-[#FBC646]'>Terapkan</button>
                    </div>
                </div>
                <div className='p-5 h-full flex flex-col lg:p-0 lg:mx-5'>

                    {data
                        ?
                        <>
                            {reload ? <div>Mencari Produk ...</div> :
                                <>
                                    <div className='flex items-center'>
                                        <h3 className='font-bold'>Urutkan</h3>
                                        <select onChange={e => sortFilter(e)} className='ml-5 outline-none p-3 rounded-md border-[1px] border-light-blue-pale' placeholder='Urutkan dari'>
                                            <option value="Terlaris">Produk Terlaris</option>
                                            <option value="Terbaru">Produk Terbaru</option>
                                            <option value="Termahal">Produk Termahal</option>
                                            <option value="Termurah">Produk Termurah</option>
                                            <option value="Diskon">Diskon Terbesar</option>
                                            <option value="Sesuai">Paling Sesuai</option>
                                        </select>
                                    </div>

                                    <div className='mt-5 grid grid-cols-2 md:grid-cols-3 gap-x-[0] xl:grid-cols-4 gap-[10px] md:gap-[30px] '>
                                        {
                                            data ?
                                                data.map(each => {
                                                    return (
                                                        <div key={each.id} className='border-[1px] relative w-fit flex flex-col max-w-[12rem] p-3 border-light-blue-pale rounded-md'>
                                                            {each.discount ?
                                                                <div className='absolute right-[5%] top-0'>
                                                                    <img src={CustomBanner} alt="" />
                                                                    <div style={{ transform: "translate(-50%,-50%)" }} className='text-[0.85rem] text-white absolute top-[50%] left-[50%]'>{each.discount}%</div>
                                                                </div>
                                                                :
                                                                ""
                                                            }
                                                            <Link className='flex w-full justify-center' to={`../product/${each.id}`}>
                                                                <img className='max-w-[100px] lg:max-w-[150px]' src={each.productImages[0].image} />
                                                            </Link>
                                                            <h3 className='text-left'>{each.name}</h3>
                                                            <div className='mt-auto'>
                                                                <h3 className={`${each.discount ? "before-2 text-[#B5B5B5]" : ""} mt-auto`}>Rp {each.price}</h3>
                                                                {each.discount ?
                                                                    <div className='font-bold text-[1.25rem]'>Rp {each.price - (each.price * each.discount / 100)}</div>
                                                                    :
                                                                    ""
                                                                }
                                                                <div className='flex gap-[10px] items-center'>
                                                                    <div className='flex items-center gap-[5px]'>
                                                                        <AiFillStar className='text-[#FBC646]' />
                                                                        {each.ratingAverage}
                                                                    </div>
                                                                    <div>|</div>
                                                                    <p>Terjual {each.amountSold}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                <div>Mencari Produk ...</div>
                                        }
                                    </div>
                                </>
                            }
                        </>
                        :
                        <>
                            {reload ?
                                <div>Mencari Produk....</div>
                                :
                                <div className=''>
                                    <div className='font-bold'>
                                        Maaf, Kami tidak dapat menemukan apa yang Kamu cari!
                                    </div>
                                    <div>Berikut rekomendasi kami untuk produk yang mungkin Kamu suka, Ganti kata kunci untuk menemukan produk yang Kamu inginkan</div>
                                    <div className='flex items-center'>
                                        <h3 className='font-bold'>Urutkan</h3>
                                        <select onChange={e => sortFilter(e)} className='ml-5 outline-none p-3 rounded-md border-[1px] border-light-blue-pale'>
                                            <option value="Terlaris">Produk Terlaris</option>
                                            <option value="Terbaru">Produk Terbaru</option>
                                            <option value="Termahal">Produk Termahal</option>
                                            <option value="Termurah">Produk Termurah</option>
                                            <option value="Diskon">Diskon Terbesar</option>
                                            <option value="Sesuai">Paling Sesuai</option>
                                        </select>
                                    </div>
                                    <div className='mt-5 grid grid-cols-2 md:grid-cols-3 gap-x-[0] xl:grid-cols-4 gap-[10px] md:gap-[30px] '>
                                        {dataProduct.map(each => {
                                            return (
                                                <div key={each.id} className='relative border-[1px] w-fit flex flex-col max-w-[12rem] p-3 border-light-blue-pale rounded-md'>
                                                    {each.discount ?
                                                        <div className='absolute right-[5%] top-0'>
                                                            <img src={CustomBanner} alt="" />
                                                            <div style={{ transform: "translate(-50%,-50%)" }} className='text-[0.85rem] text-white absolute top-[50%] left-[50%]'>{each.discount}%</div>
                                                        </div>
                                                        :
                                                        ""
                                                    }
                                                    <Link className='flex w-full justify-center' to={`../product/${each.id}`}>
                                                        <img className='max-w-[100px] lg:max-w-[150px]' src={each.productImages[0].image} />
                                                    </Link>
                                                    <h3 className='text-left'>{each.name}</h3>
                                                    <div className='mt-auto'>
                                                        <h3 className={`${each.discount ? "before-2 text-[#B5B5B5]" : ""} mt-auto`}>Rp {each.price}</h3>
                                                        {each.discount ?
                                                            <div className='font-bold text-[1.25rem]'>Rp {each.price - (each.price * each.discount / 100)}</div>
                                                            :
                                                            ""
                                                        }
                                                        <div className='flex gap-[10px] items-center'>
                                                            <div className='flex items-center gap-[5px]'>
                                                                <AiFillStar className='text-[#FBC646]' />
                                                                {each.ratingAverage}
                                                            </div>
                                                            <div>|</div>
                                                            <p>Terjual {each.amountSold}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </>
                    }
                    <div>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Selanjutnya"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={items.totalPage}
                            previousLabel="Sebelumnya"
                            renderOnZeroPageCount={null}
                            containerClassName="flex gap-3 float-right w-fit items-center mt-12"
                            pageClassName='p-3 px-5 text-[1.25rem]'
                            activeClassName='bg-[#FBC646]'
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero