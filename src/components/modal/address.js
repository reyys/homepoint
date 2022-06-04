
import React, { useContext } from 'react'
import closeIcon from '../../assets/icon/close.png'
import { addressContext } from '../../context/context'

function Address({ setAddress, setData, data }) {

    const [name, setName] = React.useState("")

    const { listProvinsi, listKabupaten, listKecamatan } = useContext(addressContext)

    console.log(listKabupaten)
    const changeName = () => {
        setAddress(false)
    }

    return (
        <div className='modal-bg flex w-full h-full absolute bg-red-500 left-0 top-0 justify-center items-center'>
            <div className='relative modal-auto flex flex-col items-center justify-center w-[40%] h-[90%] rounded-md bg-white p-16 z-99'>
                <img onClick={() => setAddress(false)} className="cursor-pointer absolute right-[20px] top-[20px] max-w-[20px]" src={closeIcon} alt="" />
                <h1 className='py-3 text-center font-bold text-[#316093]'>Tambahkan Alamat</h1>
                <h1 className='py-2 w-full'>Informasi Detail Alamat</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='Label Alamat' />
                </div>
                <select className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    {listProvinsi.provinsi.map(each => {
                        return (
                            <option value={each.nama} key={each.id}>{each.nama}</option>
                        )
                    })}
                </select>
                <select className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    {listKabupaten.kota_kabupaten.map(each => {
                        return (
                            <option value={each.nama} key={each.id}>{each.nama}</option>
                        )
                    })}
                </select>
                <select className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    {listKecamatan.kecamatan.map(each => {
                        return (
                            <option value={each.nama} key={each.id}>{each.nama}</option>
                        )
                    })}
                </select>
                <select className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <option value="Provinsi">Serpong</option>
                </select>
                <select className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <option value="Provinsi">Kode Pos</option>
                </select>
                <h1 className='py-2 mt-4 w-full'>Informasi Penerima</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='Nama Lengkap Penerima' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='No Hp Penerima' />
                </div>
                <div className='w-full mt-4'>
                    <input id="utama" type="checkbox" /> <label htmlFor="utama">Jadikan Alamat Utama</label>

                </div>
                <button onClick={() => changeName()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan Alamat</button>
            </div>
        </div>
    )
}

export default Address