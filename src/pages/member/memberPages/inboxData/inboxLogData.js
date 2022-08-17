import React,{useState} from 'react';
import DataTable from 'react-data-table-component'

const TestData =[
    {
        number:"1",

        loginName:"mse99",
        ID:"mse99",
        Updater:"211.20.2.194",
        ChangeType:"账号状态变更",
        Behavior:"Un-lock password lock",
        LoginTime:"2022-08-16 11:45:58",
        Device:"Ios",
        Country:"TW",
        Website:"https://react-table-v7.tanstack.com/docs/quick-start",
        NewOldValue:"123,145",
        UpdateTime:"2022-08-16 11:45:58",
    },
]

const InboxLogData = () => {
    const [isData,setIsData] = useState(TestData);

    const columns = [
        {
            name:"#",
            selector: (row) => row.number,
            
        },
        {
            name:"站台种类",
            selector: (row) => row.loginName,
        },
        {
            name:"登入名称",
            selector: (row) => row.ID,
        },
        {
            name:"更新者",
            selector: (row) => row.Updater,
        },
        {
            name:"使用者IP",
            selector: (row) => row.Updater,
        },
        {
            name:"登入时间",
            selector: (row) => row.LoginTime,
        },
        {
            name:"设备",
            selector: (row) => row.Device,
        },
        {
            name:"操作",
            selector: (row) => row.ChangeType,
        },
        {
            name:"国家",
            selector: (row) => row.Country,
        },
        {
            name:"网址",
            selector: (row) => row.Website,
        },
    ]
    return <DataTable
    columns={columns}
    data={isData}
    pagination
    />
}

export default InboxLogData;
