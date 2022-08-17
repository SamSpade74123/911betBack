import React,{useState} from 'react';
import DataTable from 'react-data-table-component'

const TestData =[
    {
        loginName:"mse99",
        ID:"mse99",
        Offlineagent:"???",
        Offlineplayer:"???",
        function:"???",
        money:"123,145",
        time:"2022-08-16 11:45:58 / 2022-06-15 17:29:58 / 2022-06-15 17:29:58",
    },
]


const DataTables = () => {
    const [isData,setIsData] = useState(TestData);

    const columns = [
        {
            name:"登入名称",
            selector: (row) => row.loginName,
            
        },
        {
            name:"名称",
            selector: (row) => row.ID,
        },
        {
            name:"下线代理",
            selector: (row) => row.Offlineagent,
        },
        {
            name:"下线玩家",
            selector: (row) => row.Offlineplayer,
        },
        {
            name:"功能列",
            selector: (row) => row.function,
        },
        {
            name:"余额",
            selector: (row) => row.money,
        },
        {
            name:"建立时间/最后登入时间/首次入款时间",
            selector: (row) => row.time,
        },
    ]
    return <DataTable
    columns={columns}
    data={isData}
    pagination
    />
}

export default DataTables;
