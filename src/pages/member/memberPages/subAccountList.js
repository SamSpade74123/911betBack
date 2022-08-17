import React,{ useState,useMemo } from 'react';
import styled from 'styled-components';

import Title from '../memberComponents/title';
import SubAccountData from './subAccountData/subAccountData';

import {FaUserPlus} from 'react-icons/fa'


const Main =styled.div`

`

const SubAccountList = () => {
    return (
        <Main className='w-full py-2 bg-white px-6'>
            <Title title="子帐号列表"/>


            <section className='py-2 grid grid-cols-6 gap-3 mb-4 border-b-2 border-dotted'>
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='戶名' />
                <button className='bg-orange-500 text-white rounded shadow'>搜尋</button>
            </section>


            <section className='bg-gray-100 mb-2'>
                <div className='flex items-center justify-between py-2 px-4'>
                    <button className='py-2 px-3 rounded-3xl bg-orange-500 text-white text-sm flex items-center'><FaUserPlus className='mr-2'/>新增子帳號</button>
                </div>
                <SubAccountData/>
            </section>
        </Main>
    );
}

export default SubAccountList;
