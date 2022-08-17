import React from 'react';
import LeftTitle from '../../../leftTitle';
import styled from 'styled-components';

const Main = styled.div`
            td,th{
                font-weight:unset;
                padding:0.2rem;
                text-align:center;
                font-size:14px;
            }

`


const EgameComponents = () => {
    return (
        <div className='grid grid-cols-12 mb-2 bg-white px-4 '>
            <LeftTitle title="AE SLOT"/>   
            <Main className='col-span-10 px-12 gap-x-2'>
                <div className='border-dotted border-b-2 py-3'>
                    <input type="radio" id="WOS" name="WOS" value="" />
                    <label for="WOS">禁用游戏</label>
                </div>


                <div className='border-dotted border-b-2 grid grid-cols-6 py-3 gap-2'>
                    <div>
                        <p className='text-sm text-gray-500'>SH 最小 PT</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>90.0%</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>SH 最大 PT</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>90.0%</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>佣金设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                </div>

            </Main>  
        </div>
    );
}

export default EgameComponents;
