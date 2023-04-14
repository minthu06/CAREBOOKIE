import React, { useEffect, useState } from 'react'
import Layout from '../../../layout'
import { Table } from 'antd';
import columns from '../../../columns/booking';

const Index = () => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(6)
  const [data, setData] = useState([])

  const dataType = "users"

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then(res => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return (
    <Layout>
      <div className='mx-5'>
        <div className='text-2xl font-bold text-cyan-700 mb-4 pt-4 '>Quản lý khám chữa bệnh</div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ y: 500 }}
          loading={loading}
          pagination={{
            pageSize: 5,
            total: 10,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }
          }}
        />
      </div>
    </Layout>
  )
}

export default Index
