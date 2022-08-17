import React from 'react';
import styled from 'styled-components';

import Title from '../../member/memberComponents/title';
import RedioComp from '../reportsComponents/radioComp';
import DailywinData from './dailywinData/dailywinData';

import {HiOutlineArrowSmRight} from 'react-icons/hi'

import {BiFootball} from 'react-icons/bi'
import {GiPokerHand} from 'react-icons/gi'
import {TbGasStation} from 'react-icons/tb'

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

    .rdt_TableCell{
        min-width:unset;
        text-align:center;
        > div{
            width:100%
        }
    }
    .rdt_TableHeadRow{
        display:grid !important;
        // grid-template-columns: repeat(7, minmax(0, 1fr)) !important;
        grid-template-columns: 7.5% 5% 7.5% 25% 25% 25% 5%;
    }
    .rdt_TableCol{
        min-width:unset;
        border-left: 1px solid #f3f3f3;
        border-top: 1px solid #f3f3f3;
    }
    .rdt_TableCol_Sortable{
        justify-content:center;
        display:flex;
        align-items:center;
    }
    .rdt_TableRow{
        display:grid !important;
        // grid-template-columns: repeat(7, minmax(0, 1fr)) !important;
        grid-template-columns: 7.5% 5% 7.5% 25% 25% 25% 5%;
    }
`

{/*測試ＪＳＯＮ*/}
const sports = [
    {
        title:"WOS"
    },
]
const live = [
    {
        title:"AE Sexy"
    },
    {
        title:"Dream Gaming"
    },
    {
        title:"VIVO"
    },
    {
        title:"WM"
    },
    

]
const egame = [
    {
        title:"AE SLOT"
    },
    {
        title:"FACHAI"
    },
    {
        title:"JILI"
    },
    {
        title:"KingMaker"
    },
    {
        title:"OneGame"
    },
    {
        title:"PLAY8"
    },
    {
        title:"PlayStar"
    },
    {
        title:"RICH88"
    },
]
{/*測試ＪＳＯＮ*/}

const Dailywin = () => {
    const  curr = new Date();
    const  yes = new Date();
    curr.setDate(curr.getDate());
    yes.setDate(yes.getDate() - 1);
    const  today = curr.toISOString().substring(0,10);
    const  yesterday = yes.toISOString().substring(0,10);

    return (
        <Main className='w-full py-2 bg-white px-6'>
            <Title title="明细报表"/>

            <RedioComp icon={<BiFootball className='text-3xl text-gray-500 mr-2'/>} list={sports}/>
            <RedioComp icon={<GiPokerHand className='text-3xl text-gray-500 mr-2'/>} list={live}/>
            <RedioComp icon={<TbGasStation className='text-3xl text-gray-500 mr-2'/>} list={egame}/>

            <section className='py-2 flex mb-2 items-center search-items flex-wrap'>
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='戶名' />
                <input type="date" id="" name="" defaultValue={yesterday} className='p-1 mr-2 rounded shadow' placeholder='' />
                <HiOutlineArrowSmRight className='mr-2'/>
                <input type="date" id="" name="" defaultValue={today} className='p-1 mr-2 rounded shadow' placeholder='' />
                <button type="submit" className='bg-orange-500 text-white rounded shadow py-1 px-2 mr-2'>Search</button>
                <button type="button" className='bg-amber-800  text-white rounded shadow py-1 px-2 mr-2'>Today</button>
                <button type="button" className='bg-amber-800  text-white rounded shadow py-1 px-2 mr-2'>Yesterday</button>
                <button type="button" className='bg-amber-800  text-white rounded shadow py-1 px-2 mr-2'>ThisWeek</button>
                <button type="button" className='bg-amber-800  text-white rounded shadow py-1 px-2 mr-2'>LastWeek</button>
                <button type="button" className='bg-amber-800  text-white rounded shadow py-1 px-2 mr-2'>ThisMonth</button>
                <button type="button" className='bg-amber-800  text-white rounded shadow py-1 px-2 mr-2'>LastMonth</button>
            </section>

            
            <div className='border-b-2 border-dotted mb-2'></div>

            <DailywinData/>

        </Main>
    );
}

export default Dailywin;
