import React, { useEffect, useState } from 'react'
import Layout from '../../../layout'
import { Table } from 'antd';
import Staff from '../../../columns/staff/index';
import { Edit, Plus } from '../../../assets/svg';
import Button from '../../../components/button/index'
import { get } from '../../../utils/apicommon'
import Modal from './modal';

const Index = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [filterVal, setfilterVal] = useState('');
    const [search, setSearch] = useState([]);
    const [showModal, setShowModal] = useState(false)

    let user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true)
        const datajs = await get(`/admin/employees/${user.hospitalId}`);
        const filteredData = datajs.filter((item) => item.firstName)
        setData(filteredData)
        setSearch(filteredData)
        setLoading(false)
    };

    function handleSearch(event) {
        if (event.target.value === '') {
            setData(search)
        } else {
            const filterSearch = search.filter(item => item.firstName.toLowerCase().includes(event.target.value) || item.lastName.toLowerCase().includes(event.target.value))
            setData(filterSearch)
        }
        setfilterVal(event.target.value)
    }

    return (
        <Layout>
            <div className=' mx-6 bg-white p-6'>
                <div className='flex justify-between items-center'>
                    <div className=' text-2xl font-bold text-cyan-950 '>Quản lý người dùng</div>
                </div>
                <div className=' border-b w-full my-3 flex justify-between items-center'>
                    <div className="relative m-3">
                        <input type="search" id="search"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2 "
                            placeholder="Tìm kiếm..."
                            value={filterVal}
                            onInput={(e) => handleSearch(e)}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    <Button icon={<Plus className='fill-white w-7 h-7 ' />}
                        className="bg-cyan-800 text-white flex items-center rounded-md px-3 py-2 gap-3 mr-3"
                        type="button"
                        text="Thêm người dùng"
                        onClick={() => setShowModal(true)} />
                </div>

                <div className='mb-2 !z-0'>
                    <Staff loading={loading}
                        data={data}
                        fetchData={fetchData} />
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} id={user.hospitalId} fetchData={fetchData} >
            </Modal>
        </Layout>
    )
}

export default Index
