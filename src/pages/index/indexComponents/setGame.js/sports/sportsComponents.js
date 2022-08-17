import React from 'react';
import LeftTitle from '../../../leftTitle';
import styled from 'styled-components';

const Main = styled.div`
        th{
            text-align:center !important;
        }
`

const SportsComponents = () => {
    return (
        <div className='grid grid-cols-12 mb-2 bg-white px-4 '>
            <LeftTitle title="WOS"/>   
            <Main className='col-span-10 px-12 gap-x-2'>
                <div className='border-dotted border-b-2 py-3'>
                    <input type="radio" id="WOS" name="WOS" value="" />
                    <label for="WOS">禁用游戏</label>
                </div>


                <div className='border-dotted border-b-2 py-3 flex'>
                    <div className='mr-2'>
                        <input type="radio" id="MY" name="MY" value="" checked />
                        <label for="MY">MY</label>
                    </div>
                    <div className='mr-2'>
                        <input type="radio" id="MY" name="MY" value="" checked />
                        <label for="MY">MY</label>
                    </div>
                    <div className='mr-2'>
                        <input type="radio" id="MY" name="MY" value="" checked />
                        <label for="MY">MY</label>
                    </div>
                    <div className='mr-2'>
                        <input type="radio" id="MY" name="MY" value="" checked />
                        <label for="MY">MY</label>
                    </div>
                </div>


                <div className='border-dotted border-b-2 grid grid-cols-6 py-3 gap-2'>
                    <div>
                        <p className='text-sm text-gray-500'>A组设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>B组设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>C组设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>D组设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>E组设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>F组设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>1 X 2 设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>混合过关设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>其它设定</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>MyanmarSetting</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>0</p>
                    </div>
                </div>

                <div className=' py-3 flex flex-col'>
                    <p className='pl-2 py-1 bg-gradient-to-b from-gray-50 to-gray-300 rounded-t-xl'>上限</p>
                    <table className='table-auto border-collapse w-full '>
                        <thead>
                            <tr>
                                <th rowSpan={2} className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>最低投注</th>
                                <th rowSpan={2} className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>最高投注</th>
                                <th rowSpan={2} className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>单场最高投注额度</th>
                                <th colSpan={2} className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>上周</th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>串关</th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>波胆</th>
                            </tr>
                            <tr>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>最低投注</th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>最高投注</th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>最低投注</th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>最高投注</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b-2 border-dotted'>
                                <td>50</td>
                                <td>200,000</td>
                                <td>500,000</td>
                                <td>50</td>
                                <td>50,000</td>
                                <td>50</td>
                                <td>200,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='py-3 flex flex-col w-80'>
                    <p className='pl-2 py-1 bg-gradient-to-b from-gray-50 to-gray-300 rounded-t-xl'>上限</p>
                    <table className='table-auto border-collapse w-full '>
                        <thead>
                            <tr className=''>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'></th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>SH 最小 PT</th>
                                <th className='border border-slate-300 bg-gradient-to-r from-gray-100 to-gray-200 text-red-900'>SH 最小 PT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b-2 border-dotted'>
                                <td>HDP/OU/OE</td>
                                <td>90.0</td>
                                <td>90.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Main>  
        </div>
    );
}

export default SportsComponents;
