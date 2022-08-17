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

const LiveComponents = () => {
    return (
        <div className='grid grid-cols-12 mb-2 bg-white px-4 '>
            <LeftTitle title="AE Sexy"/>   
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


                <div className='py-3 flex flex-col w-60'>
                    <p className='pl-2 py-1 bg-gradient-to-b from-gray-50 to-gray-300 rounded-t-xl'>上限</p>
                    <table className='table-auto border-collapse w-full '>
                        <thead>
                            <tr className=''>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>庄/闲</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b-2 border-dotted'>
                                <td>
                                    <div className='p-1 border rounded shadow'>
                                        <p className='text-gray-400'>Min <span className='text-xl !text-black'>200</span> / Max <span className='text-xl !text-black'>10,000</span></p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Main>  
        </div>
    );
}

export default LiveComponents;
