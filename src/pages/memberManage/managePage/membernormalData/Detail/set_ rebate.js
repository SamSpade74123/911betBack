import React from 'react';
import SetTitle from './Components/set_title';


const SetRebate = () => {
    return (
        <>
        <div className='py-2 grid grid-cols-8 gap-3 items-center mb-2'>
            <SetTitle title="ＸＸ洗碼反水成數"/>
            <input type="text" value="0" className='col-span-1 border text-sm py-1 px-2'/>
            <p>%</p>
        </div>        
        </>

    );
}

export default SetRebate;
