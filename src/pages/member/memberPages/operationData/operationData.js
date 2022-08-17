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
        NewOldValue:"123,145",
        UpdateTime:"2022-08-16 11:45:58",
    },
]

const OperationData = () => {
    const [isData,setIsData] = useState(TestData);

    const columns = [
        {
            name:"#",
            selector: (row) => row.number,
            
        },
        {
            name:"使用者代号",
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
            name:"用户操作类型",
            selector: (row) => row.ChangeType,
        },
        {
            name:"行为",
            selector: (row) => row.Behavior,
        },
        {
            name:"新/舊值",
            selector: (row) => row.NewOldValue,
        },
        {
            name:"更新时间",
            selector: (row) => row.UpdateTime,
        },
    ]
    return <DataTable
    columns={columns}
    data={isData}
    pagination
    />
}

export default OperationData;
