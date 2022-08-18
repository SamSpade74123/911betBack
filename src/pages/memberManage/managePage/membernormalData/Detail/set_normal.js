import React,{useState} from 'react';
import SetTitle from './Components/set_title';

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
    }
]

const SetNormal = () => {

    return (
        <>
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="註冊日期"/>
            <input type="text" value="2022-08-17 15:07:03" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="所屬代理"/>
            <input type="text" value="123" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="帳號"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="密碼"/>
            <input type="password" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="VIP"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="姓名"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="EMAIL"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="生日"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="通訊軟體帳號"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        </>
    );
}

export default SetNormal;
