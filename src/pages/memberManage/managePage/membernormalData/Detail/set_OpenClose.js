import React from 'react';
import SetTitle from './Components/set_title';

const SetOpenClose = () => {
    return (
        <>
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="ＸＸ狀態"/>
            <p>可登入</p>
            <button className='bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600'>更改狀態</button>
        </div>        
        </>
    );
}

export default SetOpenClose;
