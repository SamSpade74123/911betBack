import React,{useState} from 'react';
import styled from 'styled-components';

import LeftTitle from './leftTitle';
import Operate from './indexComponents/operate';
import LeftTable from './indexComponents/reportsTable.js/leftTable';
import RightTable from './indexComponents/reportsTable.js/rightTable';
import Sports from './indexComponents/setGame.js/sports';
import Live from './indexComponents/setGame.js/live';
import Egame from './indexComponents/setGame.js/egame';

const Main =styled.div`
    .operate{
        svg{
            color:#fff;
            font-size:1.5rem;
        }
        p{
            color:#fff;
        }
    }
    .reports{
        td,th{
            font-weight:unset;
            padding:0.2rem;
            text-align:right;
            font-size:14px;
        }
        td:nth-child(1){
            text-align:left !important;
        }
    }
`

const MainFile = () => {

    const [isSelect,setIsSelect] = useState('sports');

    return (
        <Main className='w-full'>

            <section className='bg-white px-4 items-center grid grid-cols-12 mb-2'> {/* 檔案 */}
                <LeftTitle title="我的档案"/>
                <section className='col-span-10 grid grid-cols-4 px-12 gap-x-1'>
                    <div className='text-sm px-2'>
                        <p className='text-gray-500'>登入名称</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>mse99</p>
                    </div>
                    <div className='text-sm px-2 flex flex-col'>
                        <p className='text-gray-500 '>最后登入时间</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1 mb-2'>2022-08-16 11:45:58</p>

                        <p className='text-gray-500'>建立时间</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>2022-06-15 17:29:58</p>
                    </div>
                    <div className='text-sm px-2'>
                        <p className='text-gray-500'>登入IP</p>
                        <p className='w-full text-center bg-gray-100 border rounded py-1'>60.249.132.75</p>
                    </div>
                </section>  
            </section>
            
            <section className='bg-white px-4 items-center grid grid-cols-12 mb-2 operate'> {/* 操作 */}
                <LeftTitle title="操作"/>
                <section className='col-span-10 grid grid-cols-6 px-12 gap-x-1'>
                    <Operate/>
                </section>  
            </section>


            <section className='bg-white px-4 items-center grid grid-cols-12 mb-2 reports'> {/* 統計 */}
                <LeftTitle title="统计"/>
                <section className='col-span-10 grid grid-cols-2 px-12 gap-x-2'>
                    <LeftTable/>
                    <RightTable/>
                </section>  
            </section>

            <section className='bg-white items-center grid grid-cols-6 mb-2 selector' style={{height:"30px"}}>
                <p className={`mx-2 text-center rounded-t h-full flex items-center justify-center text-black cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-400 ${isSelect == 'sports' ? "bg-orange-500 !text-white":null}`} onClick={()=>setIsSelect('sports')}>体育世界</p>
                <p className={`mx-2 text-center rounded-t h-full flex items-center justify-center text-black cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-400 ${isSelect == 'live' ? "bg-orange-500 !text-white":null}`} onClick={()=>setIsSelect('live')}>真人娱乐</p>
                <p className={`mx-2 text-center rounded-t h-full flex items-center justify-center text-black cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-orange-400 ${isSelect == 'egame' ? "bg-orange-500 !text-white":null}`} onClick={()=>setIsSelect('egame')}>电子娱乐</p>
            </section>

            <section className='items-center mb-2'> {/* 統計 */}
                {isSelect == 'sports' ? <Sports/> : null}
                {isSelect == 'live' ? <Live/> : null}
                {isSelect == 'egame' ? <Egame/> : null}
            </section>

        </Main>
    );
}

export default MainFile;
