import React from 'react';
import SetTitle from './Components/set_title';

const SetGame = () => {
    return (
        <>
        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="ＸＸ遊戲帳號"/>
            <input type="text" value="0" className='col-span-2 border text-sm py-1 px-2'/>
            <button className='bg-blue-500 text-white rounded py-1 px-2 hover:bg-blue-600'>查詢</button>
            <button className='col-span-2 bg-red-500 text-white rounded py-1 px-2 hover:bg-red-600'>取回此遊戲的所有點數</button>
        </div>        
        </>
    );
}

export default SetGame;
