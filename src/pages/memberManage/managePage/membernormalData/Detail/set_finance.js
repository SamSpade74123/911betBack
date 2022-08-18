import React from 'react';
import SetTitle from './Components/set_title';


const SetFinance = () => {
    return (
        <>
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="總儲值"/>
            <input type="text" value="0" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="總提領"/>
            <input type="text" value="0" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="後端撥入"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="優惠贈點"/>
            <input type="password" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="返佣"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="紅利幣"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="主帳幣 撥入/取回"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
            <button className='bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600'>撥入</button>
            <button className='bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600'>取回</button>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="提領限制"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="公司入帳開放"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="金流"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="信用卡"/>
            <input type="text" value="" className='col-span-2 border text-sm py-1 px-2'/>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="轉入鎖定"/>
            <p>未鎖定</p>
            <button className='bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600'>解鎖</button>
        </div>        
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="轉出鎖定"/>
            <p>未鎖定</p>
            <button className='bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600'>解鎖</button>
        </div>        
        </>
    );
}

export default SetFinance;
