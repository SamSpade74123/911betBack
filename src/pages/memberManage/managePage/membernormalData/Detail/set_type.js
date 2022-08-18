import React from 'react';
import SetTitle from './Components/set_title';

const SetType = () => {
    return (
        <>
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="類別"/>
            <select className='col-span-2 border text-sm py-1 px-2'>
                <option>現金會員</option>
            </select>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="標籤"/>
            <input type="text" value="待設定" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="狀態"/>
            <select className='col-span-2 border text-sm py-1 px-2'>
                <option>正常</option>
                <option>停用</option>
            </select>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="可否提款"/>
            <select className='col-span-2 border text-sm py-1 px-2'>
                <option>可</option>
                <option>否</option>
            </select>
        </div>        
        </>
    );
}

export default SetType;
