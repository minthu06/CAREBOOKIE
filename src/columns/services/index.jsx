import { Avatar } from '@mui/material';
import { Space, Table, Tag } from 'antd';
import { useRef, useState } from 'react';
import { Edit, Trash } from '../../assets/svg';
import Button from '../../components/button/index'
import EditModal from '../../routes/admin/services/editmodal';
import { del } from '../../utils/apicommon'


const Services = ({ loading,
    data,
    setEditModel,
    setFormid,
    fetchData
}) => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const Columns = [
        {
            key: '1',
            title: 'STT',
            width: 150,
            render: (text, record, index) => <p className='font-bold'>{index + 1}</p>,
            sorter: (record1, record2) => {
                return record1.id > record2.id
            }
        },
        {
            key: '2',
            title: "Tên dịch vụ",
            dataIndex: "serviceName",
            fixed: window.innerWidth > 767,
            render: (text, item) => text &&
                <div>{item.serviceName}</div>
        },
        {
            key: '3',
            title: "Giá khám",
            dataIndex: "price",
            render: (text, item) => (
                <p>{item.price}.000 vnđ</p>
            ),

        },
        {
            key: 4,
            title: "Thao tác",
            render: (data) => (
                <>
                    <Button
                        type='button'
                        className="hover:bg-sky-200 rounded-lg"
                        icon={<Edit className='w-9 h-9 fill-sky-700 p-1' />}
                        onClick={() => {
                            setFormid(data)
                            setEditModel(true)
                        }} />
                    <Button
                        type='button'
                        className="hover:bg-red-300 rounded-lg"
                        icon={<Trash className='w-9 h-9 fill-red-500 p-1' />}
                        onClick={() => handleDelete(data)} />
                </>
            )
        }
    ];

    const handleDelete = async (data) => {
        await del(`admin/service/delete/${data.id}`)
        fetchData();
    }

    return (
        <Table
            className=' !z-0'
            columns={Columns}
            dataSource={data}
            scroll={{ y: 500 }}
            loading={loading}
            pagination={{
                pageSize: 5,
                onChange: (page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                }
            }}
        />
    )
}
export default Services