import React from 'react';
import SetTitle from './Components/set_title';

import {HiOutlineArrowSmRight} from 'react-icons/hi'

const SetWinLose = () => {
    const  curr = new Date();
    const  yes = new Date();
    curr.setDate(curr.getDate());
    yes.setDate(yes.getDate() - 1);
    const  today = curr.toISOString().substring(0,10);
    const  yesterday = yes.toISOString().substring(0,10);


    return (
        <>
        <section className='py-2 grid grid-cols-6 gap-3'>
            <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>Today</button>
            <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>ThisWeek</button>
            <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>LastWeek</button>
        </section>

        <section className='py-2 flex mb-2 items-center search-items'>
            <input type="date" id="" name="" defaultValue={yesterday} className='p-1 mr-2 rounded shadow' placeholder='' />
            <input type="time" id="" name="" defaultValue={"12:00:00"} className='p-1 mr-2 rounded shadow' placeholder='' />
            <HiOutlineArrowSmRight className='mr-2'/>
            <input type="date" id="" name="" defaultValue={today} className='p-1 mr-2 rounded shadow' placeholder='' />
            <input type="time" id="" name="" defaultValue={"12:00:00"} className='p-1 mr-2 rounded shadow' placeholder='' />
            <button type="submit" className='bg-orange-500 text-white rounded shadow py-1 px-4 mr-2'>Search</button>
        </section>

        <div className='py-2 grid grid-cols-12 gap-3 items-center mb-2'>
            <SetTitle title="ＸＸ總輸贏"/>
            <p>-</p>
        </div>        
        </>
    );
}

export default SetWinLose;
