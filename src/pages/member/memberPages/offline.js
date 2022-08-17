import React,{ useState,useMemo } from 'react';
import styled from 'styled-components';
import DataTables from './offlineData/dataTable';

import Title from '../memberComponents/title';

import {FaUserPlus} from 'react-icons/fa'


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

const Offline = () => {


    return (
        <Main className='w-full py-2 bg-white px-6'>
            <Title title="下线列表"/>
            <section className='py-2 grid grid-cols-6 gap-3 mb-2'>
                <input type="text" id="" name="" className='p-1 rounded shadow' placeholder='戶名' />
                <select className='p-1 rounded shadow'>
                    <option>全部</option>
                    <option>开启</option>
                    <option>暂停</option>
                    <option>锁定</option>
                </select>
                <button className='bg-orange-500 text-white rounded shadow'>搜尋</button>
            </section>

            <section className='bg-gray-100 mb-2'>
                <div className='flex items-center justify-between py-2 px-4'>
                    <button className='py-2 px-3 rounded-3xl bg-orange-500 text-white text-sm flex items-center'><FaUserPlus className='mr-2'/>新代理</button>
                    <div>
                        <p>在线会员 ：12031023</p>
                    </div>
                </div>
                {/* <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>登入名称</th>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>名称</th>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>下线代理</th>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>下线玩家</th>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>功能列</th>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>余额</th>
                            <th className='border py-2 bg-gradient-to-b from-sky-700 to-sky-800 text-white '>建立时间/最后登入时间/首次入款时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        { isData.length == 0 ?
                            "没有找到数据"
                            :isData.map((item,key)=>{
                                return(
                                    <tr>
                                        <td>{item.loginName}</td>
                                        <td>{item.ID}</td>
                                        <td>{item.Offlineagent}</td>
                                        <td>{item.Offlineplayer}</td>
                                        <td>{item.function}</td>
                                        <td>{item.money}</td>
                                        <td>{item.time}</td>
                                    </tr>
        
                                )
                            })
                        }
                    </tbody>
                </table> */}
                <DataTables/>
            </section>
        </Main>
    );
}

export default Offline;
