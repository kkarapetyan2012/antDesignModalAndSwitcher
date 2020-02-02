import React from 'react';
import { Table, Divider } from 'antd';

import Switcher from '../../components/switcher/Switcher';

const ProductTable = () => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Status',
          colSpan: 2,
          dataIndex: 'status',
        },
        {
            title: 'Switcher',
            colSpan: 0,
            render: Switcher,
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a>Invite {record.name}</a>
              <Divider type="vertical" />
              <a>Delete</a>
            </span>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          status: 'Active',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          status: 'Pasive',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          status: 'Active',
        },
      ];
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default ProductTable;