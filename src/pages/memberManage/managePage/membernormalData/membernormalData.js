import React,{useState} from 'react';
import DataTable from 'react-data-table-component'

import {TbSettings} from 'react-icons/tb'

const TestData =[
    {
        date:"2022-08-17",
        acting:"lv3322",
        ID:"218253",
        memberAcc:"test1234",
        name:"Hứa Ngọc Tiệp",
        type:"現金",
        status:"已支付",
        ip:"2402:9d80:3f9:6050:e",
        lastLogin:"	2022-08-17 15:07:08",
    },
]

const MembernarmalData = ({OpenSetting}) => {
    const [isData,setIsData] = useState(TestData);

    const columns = [
        {
            name:"註冊日期",
            selector: (row) => row.date,
            
        },
        {
            name:"所屬代理",
            selector: (row) => row.acting,
        },
        {
            name:"ID",
            selector: (row) => row.ID,
        },
        {
            name:"會員帳號",
            selector: (row) => row.memberAcc,
        },
        {
            name:"姓名",
            selector: (row) => row.name,
        },
        {
            name:"類別",
            selector: (row) => row.type,
        },
        {
            name:"狀態",
            selector: (row) => row.status,
        },
        {
            name:"ip",
            selector: (row) => row.ip,
        },
        {
            name:"最後登入日期",
            selector: (row) => row.lastLogin,
        },
        {
            name:"重置密碼",
            selector: (row) => <button className='py-1 px-2 rounded bg-blue-500 text-white'>重置密碼</button>
        },
        {
            name:"操作",
            selector: (row) => <button className='py-1 px-2 rounded bg-green-600 text-white text-lg' onClick={()=>OpenSetting(true)}><TbSettings/></button>
        },
    ]
    return <DataTable
    columns={columns}
    data={isData}
    pagination
    striped={true}
    />
}

export default MembernarmalData;
