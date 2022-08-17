import React from 'react';
import styled from 'styled-components';

import Title from '../../member/memberComponents/title';
import DepositData from '../depositData/depositData';

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
    .rdt_TableCell > div{
        white-space: unset;
        overflow: unset;
        text-overflow: unset;
    }
    .rdt_TableCol,.rdt_TableCell{
        // border-left:1px solid #c3c1c1;
        // border-top:1px solid #c3c1c1;
    }
`

const Deposit = () => {
    const  curr = new Date();
    const  yes = new Date();
    curr.setDate(curr.getDate());
    yes.setDate(yes.getDate() - 1);
    const  today = curr.toISOString().substring(0,10);
    const  yesterday = yes.toISOString().substring(0,10);

    return (
        <Main className='w-full py-2 bg-white px-6'>
            <Title title="金流存款"/>
            <section className='py-2 grid grid-cols-6 gap-3'>
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='会员帐号(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='所属代理(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='订单代理(不搜寻请留空值)' />
                <select className='p-1 rounded shadow'>
                    <option>創單時間</option>
                    <option>支付時間</option>
                </select>
            </section>

            <section className='py-2 flex mb-2 items-center search-items'>
                <input type="date" id="" name="" defaultValue={yesterday} className='p-1 mr-2 rounded shadow' placeholder='' />
                <input type="time" id="" name="" defaultValue={"12:00:00"} className='p-1 mr-2 rounded shadow' placeholder='' />
                <HiOutlineArrowSmRight className='mr-2'/>
                <input type="date" id="" name="" defaultValue={today} className='p-1 mr-2 rounded shadow' placeholder='' />
                <input type="time" id="" name="" defaultValue={"12:00:00"} className='p-1 mr-2 rounded shadow' placeholder='' />
                <button type="submit" className='bg-orange-500 text-white rounded shadow py-1 px-4 mr-2'>Search</button>
                <button type="button" className='bg-red-500 text-white rounded shadow py-1 px-4 mr-2'>清空</button>
                <button type="submit" className='bg-blue-500 text-white rounded shadow py-1 px-4 mr-2'>匯出</button>
            </section>

            
            <div className='border-b-2 border-dotted mb-2'></div>

            <DepositData/>
        </Main>
    );
}

export default Deposit;
