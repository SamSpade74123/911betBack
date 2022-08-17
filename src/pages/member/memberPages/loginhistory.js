import React,{useState} from 'react';
import styled from 'styled-components';

import Title from '../memberComponents/title';
import LoginhistoryData from './loginhistoryData/loginhistoryData';

import {FaUserPlus} from 'react-icons/fa'
import {HiOutlineArrowSmRight} from 'react-icons/hi'


const Main = styled.div`
    table{
        th,td{
            font-weight:unset;
            font-size:14px;
            text-align:center;
        }
        tbody{
            td{
                padding:.5rem 0rem;
                border-bottom:1px solid #c3c1c1;
            }
        }
    }
`

const Loginhistory = () => {
    const  curr = new Date();
    const  yes = new Date();
    curr.setDate(curr.getDate());
    yes.setDate(yes.getDate() - 1);
    const  today = curr.toISOString().substring(0,10);
    const  yesterday = yes.toISOString().substring(0,10);

    return (
        <Main className='w-full py-2 bg-white px-6'>
            <Title title="登入纪录"/>
            <section className='py-2 grid grid-cols-6 gap-3'>
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='戶名' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='更新者IP' />
            </section>

            <section className='py-2 flex mb-2 items-center search-items'>
                <input type="date" id="" name="" defaultValue={yesterday} className='p-1 mr-2 rounded shadow' placeholder='' />
                <HiOutlineArrowSmRight className='mr-2'/>
                <input type="date" id="" name="" defaultValue={today} className='p-1 mr-2 rounded shadow' placeholder='' />
                <button type="submit" className='bg-orange-500 text-white rounded shadow py-1 px-4 mr-2'>Search</button>
                <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>Today</button>
                <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>Yesterday</button>
                <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>ThisWeek</button>
                <button type="button" className='bg-amber-800	 text-white rounded shadow py-1 px-4 mr-2'>LastWeek</button>
            </section>

            
            <div className='border-b-2 border-dotted mb-2'></div>

            <LoginhistoryData/>
        </Main>
    );
}

export default Loginhistory;
