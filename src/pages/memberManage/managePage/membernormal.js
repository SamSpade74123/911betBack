import React,{useState} from 'react';
import styled from 'styled-components';

import Title from '../../member/memberComponents/title';
import MembernarmalData from './membernormalData/membernormalData';
import MembernormalDetail from './membernormalData/Detail/membernormalDetail'


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
const Membernormal = () => {
    const  curr = new Date();
    const  yes = new Date();
    curr.setDate(curr.getDate());
    yes.setDate(yes.getDate() - 1);
    const  today = curr.toISOString().substring(0,10);
    const  yesterday = yes.toISOString().substring(0,10);

    const [isOpen,setIsOpen] = useState(false);

    return (
        <Main className='w-full py-2 bg-white px-6'>
            <Title title="會員普通查詢"/>
            {isOpen == true ? <MembernormalDetail/>
            :
            <>
            <section className='py-2 grid grid-cols-5 gap-3'>
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='会员ID(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='会员帐号(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='会员姓名(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='通讯软体ID(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='所属代理(不搜寻请留空值)' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='身分证字号' />
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='Email' />
                <section className='flex items-center search-items'>
                    <button type="submit" className='bg-orange-500 text-white rounded shadow py-1 px-4 mr-2'>Search</button>
                    <button type="button" className='bg-red-500 text-white rounded shadow py-1 px-4 mr-2'>清空</button>
                    <button type="submit" className='bg-blue-500 text-white rounded shadow py-1 px-4 mr-2'>匯出</button>
                </section>
            </section>


            
            <div className='border-b-2 border-dotted mb-2'></div>

            <MembernarmalData OpenSetting={setIsOpen} />
            </>
            }
        </Main>

    );
}

export default Membernormal;
