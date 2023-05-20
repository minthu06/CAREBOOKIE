import { Avatar, Popconfirm, Space, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import { FaCheckCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { Edit, Eye, NoteMedical, Question, Trash } from '../../assets/svg';
import Button from '../../components/button/index'


const Columns = [
    {
        key: '1',
        title: 'STT',
        fixed: 'left',
        width: 60,
        render: (text, record, index) => <p className='font-bold'>{index + 1}</p>,
        sorter: (record1, record2) => {
            return record1.id > record2.id
        }
    },

    {
        key: '2',
        title: "Tên bệnh nhân",
        dataIndex: "",
        width: 250,
        fixed: 'left',
        render: (text, item) => (text &&
            item.user.fullNameBook ?
            <div className='flex items-center gap-3'>
                <p>{item.user.fullNameBook}</p>
            </div>
            : <div className='flex items-center gap-3'>
                <p>{item.user.fullName}</p>
            </div>
        )

    },

    {
        key: '3',
        title: "Tuổi",
        dataIndex: "age",
        width: 100,
        render: (text, item) => (text &&
            item.user.ageBook ?
            <div className='flex items-center gap-3'>
                <p>{item.user.ageBook}</p>
            </div>
            : <div className='flex items-center gap-3'>
                <p>{item.user.age}</p>
            </div>
        )
    },
    {
        key: '4',
        title: "Giới tính",
        width: 100,
        dataIndex: "gender",
        render: (text, item) => (text &&
            item.user.genderBook ?
            <div className='flex items-center gap-3'>
                {item.user.genderBook === 1 ?
                    <p>Nam</p>
                    : <p>Nữ</p>}
            </div>
            : <div className='flex items-center gap-3'>
                {item.user.gender === 1 ?
                    <p>Nam</p>
                    : <p>Nữ</p>}
            </div>
        ),
    },
    {
        key: '5',
        title: "Địa chi",
        dataIndex: "address",
        width: 200,

        render: (text, item) => (text &&
            <div className='flex items-center gap-3'>
                <p>{item.address}</p>
            </div>),
    },
    {
        key: '6',
        title: "Triệu chứng",
        dataIndex: "",
        width: 150,
        render: (text, item) => (text &&
            <div className='flex items-center gap-3'>
                {item.invoiceInformation.diagnose ?
                    <p>{item.invoiceInformation.diagnose}</p>
                    : <p>Không có </p>
                }
            </div>),
        sorter: (record1, record2) => {
            return record1.firstName > record2.firstName
        }
    },

    {
        key: '7',
        title: "Ngày khám",
        dataIndex: "",
        width: 200,
        render: (text, item) => {
            const formattedDate = dayjs(item.invoiceInformation.dateTimeInvoice).format('DD-MM-YYYY');
            return (text &&
                <div className='flex items-center gap-3'>
                    <div> {formattedDate} </div>
                </div>)
        },
    },

    {
        key: '9',
        title: "Người xét duyệt",
        dataIndex: "",
        width: 200,

        render: (text, item) => (
            <div className='flex items-center gap-3'>
                <p>{item.invoiceInformation.operatorId}</p>
            </div>),
    },
    {
        key: '8',
        title: "Bác sĩ đặt lịch",
        dataIndex: "",
        fixed: 'right',

        width: 200,
        render: (text, item) => (text &&
            <div className='flex items-center gap-3'>
                <p>{item.doctorName}</p>
            </div>),
    },
    {
        key: '10',
        title: "Trạng thái",
        fixed: 'right',
        dataIndex: "",
        width: 200,
        render: (text, item) => (
            <div className='flex items-center gap-3'>
                {item.invoiceInformation.diagnose != null ?
                    <p className='text-green-700 bg-green-100 py-1 px-2 rounded-xl'>Đã khám xong</p>
                    :
                    <p className='text-red-500 bg-red-100 py-1 px-2 rounded-xl'>Chưa khám xong</p>

                }
            </div>),
    },
    {
        key: '11',
        title: "Thao tác",
        fixed: 'right',
        width: 90,
        render: (data) => (
            <div className='flex'>
                <Button
                    type='button'
                    className=" rounded-lg"
                    icon={<Eye className='w-9 h-9 fill-green-700 rounded-lg hover:bg-indigo-100 p-1' />}
                    onClick={() => window.location.href = `/booking/bookingDetails/${data.invoiceInformation.bookId}?status=confirm`} />

                <Button
                    type='button'
                    className=" rounded-lg"
                    icon={<NoteMedical className='w-9 h-9 fill-emerald-900 rounded-lg hover:bg-indigo-100 p-1' />}
                    onClick={() => window.location.href = `/doctor/booking/booingDetails/${data.user.userId}?history=false`} />

            </div>
        )
    }


];

export default Columns