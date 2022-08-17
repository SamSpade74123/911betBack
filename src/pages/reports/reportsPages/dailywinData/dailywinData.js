import React,{useState} from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component'


const TestData =[
    {
        loginName:"mse99",
        ID:"mse99",
        function:"???",
        time:"2022-08-16 11:45:58 / 2022-06-15 17:29:58 / 2022-06-15 17:29:58",
        test:[
            {a:"123123123",b:"b",c:"c",d:"d"},
        ]
    },
]

const customStyles = {
    rows: {
        style: {
            width:"100%"
        },
    },
    headCells: {
        style: {
            width:"auto"
        },
    },
    cells: {
        style: {
            width:"100%"
        },
    },
};


const DailywinData = () => {
    const [isData,setIsData] = useState(TestData);
    console.log(TestData)

    const columns = [
        {
            name:<span>使用者代號</span>,
            selector: (row) => row.loginName,
            
        },
        {
            name:<span>名稱</span>,
            selector: (row) => row.ID,
        },
        {
            name:<span>有效投注額</span>,
            selector: (row) => row.function,
        },
        {
            name:<tr className='grid grid-cols-4 gap-2 w-full'>
                    <th className='col-span-4'>會員</th>
                    <th>輸贏</th>
                    <th>彩金输赢</th>
                    <th>佣金</th>
                    <th>总输赢</th>
                </tr>,
            selector: (row) => <tr className='grid grid-cols-4 gap-2 w-full'>
                                    <td>{row.test[0].a}</td>
                                    <td>{row.test[0].b}</td>
                                    <td>{row.test[0].c}</td>
                                    <td>{row.test[0].d}</td>
                                </tr>,
                                
        },
        {
            name:<tr className='grid grid-cols-3 gap-2 w-full'>
                    <th className='col-span-3'>自己</th>
                    <th>占成输赢</th>
                    <th>佣金</th>
                    <th>总输赢</th>
                </tr>,
            selector: (row) => <tr className='grid grid-cols-3 gap-2 w-full'>
                                    <td>{row.test[0].a}</td>
                                    <td>{row.test[0].b}</td>
                                    <td>{row.test[0].c}</td>
                                </tr>,
                                
        },
        {
            name:<tr className='grid grid-cols-4 gap-2 w-full'>
                    <th className='col-span-4'>直接下線</th>
                    <th>輸贏</th>
                    <th>彩金输赢</th>
                    <th>佣金</th>
                    <th>总输赢</th>
                </tr>,
            selector: (row) => <tr className='grid grid-cols-4 gap-2 w-full'>
                                    <td>{row.test[0].a}</td>
                                    <td>{row.test[0].b}</td>
                                    <td>{row.test[0].c}</td>
                                    <td>{row.test[0].d}</td>
                                </tr>,
                                
        },
        {
            name:<span>公司</span>,
            selector: (row) => row.function,
        },
    ]

    return <DataTable
    className='dataTables'
    columns={columns}
    data={isData}
    pagination
    customStyles={customStyles}
    />
}

export default DailywinData;
