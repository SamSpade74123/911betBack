import React,{useState} from 'react';
import DataTable from 'react-data-table-component'

const TestData =[
    {
        date:"2022-08-17",
        orderNumber:"1231233420",
        acting:"lv3322",
        memberAcc:"test1234",
        type:"網銀",
        depositMoney:"500,000",
        actualpayment:"123,145",
        ip:"2402:9d80:3f9:6050:e",
        status:"已支付",
        payTime:"2022-08-17 14:21:19",
        cash:"金流",
    },
]

const DepositData = () => {
    const [isData,setIsData] = useState(TestData);

    const columns = [
        {
            name:"日期",
            selector: (row) => row.date,
            
        },
        {
            name:"訂單號",
            selector: (row) => row.orderNumber,
        },
        {
            name:"所屬代理",
            selector: (row) => row.acting,
        },
        {
            name:"會員帳號",
            selector: (row) => row.memberAcc,
        },
        {
            name:"類型",
            selector: (row) => row.type,
        },
        {
            name:"存款金額",
            selector: (row) => row.depositMoney,
        },
        {
            name:"實際支付",
            selector: (row) => row.actualpayment,
        },
        {
            name:"ip",
            selector: (row) => row.ip,
        },
        {
            name:"狀態",
            selector: (row) => row.status,
        },
        {
            name:"支付時間",
            selector: (row) => row.payTime,
        },
        {
            name:"金流",
            selector: (row) => row.cash,
        },
    ]
    return <DataTable
    columns={columns}
    data={isData}
    pagination
    striped={true}
    />
}

export default DepositData;
